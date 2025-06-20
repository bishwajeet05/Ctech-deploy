#!/bin/bash

# Update system packages
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt-get install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql -c "CREATE DATABASE cadratec;"
sudo -u postgres psql -c "CREATE USER cadratec_user WITH PASSWORD 'your_secure_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE cadratec TO cadratec_user;"

# Install PM2 globally
sudo npm install -g pm2

# Clone the repository (replace with your repository URL)
git clone https://github.com/your-org/cadratec-next.git
cd cadratec-next

# Install dependencies
npm install

# Build the application
npm run build

# Set up environment variables
cat > .env << EOL
DATABASE_URL="postgresql://cadratec_user:your_secure_password@localhost:5432/cadratec"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
NODE_ENV="production"
EOL

# Run database migrations
npx prisma migrate deploy
npx prisma generate

# Start the application with PM2
pm2 start npm --name "cadratec" -- start

# Save PM2 process list and configure to start on system startup
pm2 save
pm2 startup

# Install and configure Nginx
sudo apt-get install -y nginx
sudo rm /etc/nginx/sites-enabled/default

# Create Nginx configuration
sudo tee /etc/nginx/sites-available/cadratec << EOL
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Enable the site
sudo ln -s /etc/nginx/sites-available/cadratec /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Install and configure UFW firewall
sudo apt-get install -y ufw
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo "Deployment completed successfully!" 