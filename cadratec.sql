-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 11, 2025 at 02:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cadratec`
--

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `url` text NOT NULL,
  `type` varchar(191) NOT NULL,
  `size` int(11) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `title`, `description`, `url`, `type`, `size`, `userId`, `createdAt`, `updatedAt`) VALUES
('cm7w3i3iu0003tkxwt5iv5m2o', 'Product Catalog 2024', 'Latest product catalog with specifications', '/documents/catalog-2024.pdf', 'pdf', 2048576, 'cm7w3i3ir0001tkxw4scckndx', '2025-03-05 15:51:27.318', '2025-03-05 15:51:27.318'),
('cm7w3i3ix0005tkxwztw1wls4', 'Technical Specifications', 'Detailed technical specifications for all products', '/documents/tech-specs.pdf', 'pdf', 1048576, 'cm7w3i3ir0001tkxw4scckndx', '2025-03-05 15:51:27.321', '2025-03-05 15:51:27.321');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` varchar(191) NOT NULL,
  `number` varchar(191) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'pending',
  `total` double NOT NULL,
  `userId` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `orderConfirmation` varchar(191) DEFAULT NULL,
  `orderConfirmationDate` datetime(3) DEFAULT NULL,
  `poNumber` varchar(191) DEFAULT NULL,
  `requiredDeliveryDate` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `number`, `status`, `total`, `userId`, `createdAt`, `updatedAt`, `orderConfirmation`, `orderConfirmationDate`, `poNumber`, `requiredDeliveryDate`) VALUES
('cm7w3i3j00007tkxwbp1fn5aj', 'ORD-2024-001', 'completed', 1500, 'cm7w3i3ir0001tkxw4scckndx', '2025-03-05 15:51:27.324', '2025-03-05 15:51:27.324', 'AU-00274', '2024-07-25 00:00:00.000', 'PO-001', '2024-07-30 00:00:00.000'),
('cm7w3i3j3000btkxw561a7j9w', 'ORD-2024-002', 'partial', 2750.5, 'cm7w3i3ir0001tkxw4scckndx', '2025-03-05 15:51:27.328', '2025-03-05 15:51:27.328', 'AU-00275', '2024-07-25 00:00:00.000', 'PO-002', '2024-08-01 00:00:00.000');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` varchar(191) NOT NULL,
  `orderId` varchar(191) NOT NULL,
  `modelNo` varchar(191) NOT NULL,
  `qtyOrdered` int(11) NOT NULL,
  `qtyDelivered` int(11) NOT NULL DEFAULT 0,
  `qtyPending` int(11) NOT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'pending',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `orderId`, `modelNo`, `qtyOrdered`, `qtyDelivered`, `qtyPending`, `status`, `createdAt`, `updatedAt`) VALUES
('cm7w3i3j00008tkxwnh4acgzb', 'cm7w3i3j00007tkxwbp1fn5aj', 'Silver Soleil', 50, 50, 0, 'delivered', '2025-03-05 15:51:27.324', '2025-03-05 15:51:27.324'),
('cm7w3i3j00009tkxwsy8qrnq1', 'cm7w3i3j00007tkxwbp1fn5aj', 'Black Soleil', 60, 60, 0, 'delivered', '2025-03-05 15:51:27.324', '2025-03-05 15:51:27.324'),
('cm7w3i3j3000ctkxwgsr30myl', 'cm7w3i3j3000btkxw561a7j9w', 'Platinum Elite Series', 75, 75, 0, 'delivered', '2025-03-05 15:51:27.328', '2025-03-05 15:51:27.328'),
('cm7w3i3j3000dtkxw09z1imgw', 'cm7w3i3j3000btkxw561a7j9w', 'Rose Gold Collection', 45, 0, 45, 'pending', '2025-03-05 15:51:27.328', '2025-03-05 15:51:27.328');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(191) NOT NULL,
  `sessionToken` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `expires` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `emailVerified` datetime(3) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `type` varchar(191) NOT NULL DEFAULT 'USER',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `emailVerified`, `image`, `password`, `type`, `createdAt`, `updatedAt`) VALUES
('cm7w3i3as0000tkxwj5t6boqc', 'Admin User', 'admin@cadratec.com', NULL, NULL, '$2a$12$zet7fmvF/CYZm8WJ1jHQUuUwQVrBqGw65r3KnNxor3GYQy17P2wwm', 'ADMIN', '2025-03-05 15:51:27.028', '2025-03-05 15:51:27.028'),
('cm7w3i3ir0001tkxw4scckndx', 'Demo User', 'user@cadratec.com', NULL, NULL, '$2a$12$Wi/C.t0ydDzmttr0hruqtu0V8BmbSUHEHHKw5wShGE28g4sJsvUry', 'USER', '2025-03-05 15:51:27.315', '2025-03-05 15:51:27.315');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documents_userId_fkey` (`userId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_number_key` (`number`),
  ADD KEY `orders_userId_fkey` (`userId`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_orderId_fkey` (`orderId`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sessions_sessionToken_key` (`sessionToken`),
  ADD KEY `sessions_userId_fkey` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
