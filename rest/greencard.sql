-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 26, 2016 at 01:44 PM
-- Server version: 5.7.13-0ubuntu0.16.04.2
-- PHP Version: 7.0.8-0ubuntu0.16.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greencard`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admins`
--

CREATE TABLE `tbl_admins` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admins`
--

INSERT INTO `tbl_admins` (`id`, `username`, `password`, `token`) VALUES
(1, 'admin', '$2y$10$fpLbkijTLKo/1hTuYmeqRu910nN02S/qiKvfrt546hyFnUZoLR2aC', 'f3248f94411b75faf01af6aeb083aaa3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_applications`
--

CREATE TABLE `tbl_applications` (
  `id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `title` tinyint(1) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `education` tinyint(1) NOT NULL,
  `experience` tinyint(1) NOT NULL,
  `birth_city` varchar(50) NOT NULL,
  `birth_country` int(11) NOT NULL,
  `marital` tinyint(1) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_country` varchar(10) NOT NULL,
  `phone_number` varchar(30) NOT NULL,
  `address` varchar(255) NOT NULL,
  `address2` varchar(255) NOT NULL,
  `postal` varchar(50) NOT NULL,
  `address_city` varchar(50) NOT NULL,
  `address_state` varchar(50) NOT NULL,
  `address_country` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `children` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `expired` tinyint(1) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_applications`
--

INSERT INTO `tbl_applications` (`id`, `password`, `title`, `firstname`, `lastname`, `gender`, `education`, `experience`, `birth_city`, `birth_country`, `marital`, `email`, `phone_country`, `phone_number`, `address`, `address2`, `postal`, `address_city`, `address_state`, `address_country`, `birthday`, `children`, `status`, `expired`, `timestamp`) VALUES
(1, '', 1, 'IN Whan', 'Cha', 1, 2, 2, 'La paz', 27, 1, 'ic319@nyu.edu', '156', '8705640560', '5601 Blvd. East Apt 23K', '', '07093', 'West New York', 'NJ', 226, '1982-08-07', 0, 0, 0, '2016-08-15 06:16:27'),
(2, '', 3, 'dsaf', 'asdf', 1, 2, 2, 'fasdf', 34, 1, 'asdf', '234', '23453525', 'zxcv', 'zxcv', 'zxcv', 'zxcv', 'zxcv', 3, '1987-06-04', 0, 0, 0, '2016-08-15 06:32:17'),
(11, '', 1, 'asdf', 'asdf', 1, 2, 2, 'asdf', 3, 1, 'asdfasdf', '234', '234234', 'asdf', 'asdf', 'asdf', 'asdf', 'asdf', 4, '2013-03-03', 0, 0, 0, '2016-08-15 06:48:21'),
(12, '', 2, 'fdsf', 'sdfdsf', 1, 3, 1, '234234', 6, 1, 'asdfxcv', 'wew', '23432432', '324234', '324234', 'adsfafd', '2343243', '234dsf', 9, '2012-04-03', 0, 0, 0, '2016-08-15 07:01:10'),
(13, '', 3, 'zxcv', 'zcxv', 1, 3, 2, 'dsffdsfds', 4, 1, 'qwer', '234324', '32432432', '234324', '2dsafds', 'asdf', 'adsa', 'dfafds', 4, '2011-07-04', 0, 0, 0, '2016-08-15 07:03:11');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_applications_family`
--

CREATE TABLE `tbl_applications_family` (
  `id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `education` tinyint(1) NOT NULL,
  `experience` tinyint(1) NOT NULL,
  `birthday` date NOT NULL,
  `birth_city` varchar(50) NOT NULL,
  `birth_country` int(11) NOT NULL,
  `relationship` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_applications_photos`
--

CREATE TABLE `tbl_applications_photos` (
  `id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `path` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_countries`
--

CREATE TABLE `tbl_countries` (
  `id` int(11) NOT NULL,
  `country` varchar(50) NOT NULL,
  `pass` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_countries`
--

INSERT INTO `tbl_countries` (`id`, `country`, `pass`) VALUES
(1, ' Afghanistan', 1),
(2, ' Akrotiri and Dhekelia', 1),
(3, ' Albania', 1),
(4, ' Algeria', 1),
(5, ' American Samoa', 1),
(6, ' Andorra', 1),
(7, ' Angola', 1),
(8, ' Anguilla', 0),
(9, ' Antarctica', 1),
(10, ' Antigua and Barbuda', 1),
(11, ' Argentina', 1),
(12, ' Armenia', 1),
(13, ' Aruba', 1),
(14, ' Australia', 1),
(15, ' Austria', 1),
(16, ' Azerbaijan', 1),
(17, ' Bahamas', 1),
(18, ' Bahrain', 1),
(19, ' Bangladesh', 0),
(20, ' Barbados', 1),
(21, ' Belarus', 1),
(22, ' Belgium', 1),
(23, ' Belize', 1),
(24, ' Benin', 1),
(25, ' Bermuda', 0),
(26, ' Bhutan', 1),
(27, ' Bolivia', 1),
(28, ' Bosnia and Herzegovina', 1),
(29, ' Botswana', 1),
(30, ' Bouvet Island', 1),
(31, ' Brazil', 0),
(32, ' British Antarctic Territory', 1),
(33, ' British Indian Ocean Territory', 1),
(34, ' Brunei Darussalam', 1),
(35, ' Bulgaria', 1),
(36, ' Burkina Faso', 1),
(37, ' Burundi', 1),
(38, ' Cambodia', 1),
(39, ' Cameroon', 1),
(40, ' Canada', 0),
(41, ' Cape Verde', 1),
(42, ' Cayman Islands', 0),
(43, ' Central African Republic', 1),
(44, ' Chad', 1),
(45, ' Chile', 1),
(46, ' China', 0),
(47, ' Christmas Island', 1),
(48, ' Cocos (Keeling) Islands', 1),
(49, ' Colombia', 0),
(50, ' Comoros', 1),
(51, ' Congo', 1),
(52, ' Cook Islands', 1),
(53, ' Costa Rica', 1),
(54, ' Cote D\'Ivoire', 1),
(55, ' Croatia', 1),
(56, ' Cuba', 1),
(57, ' Cyprus', 1),
(58, ' Czech Republic', 1),
(59, ' Denmark', 1),
(60, ' Djibouti', 1),
(61, ' Dominica', 1),
(62, ' Dominican Republic', 0),
(63, ' East Timor', 1),
(64, ' Ecuador', 0),
(65, ' Egypt', 1),
(66, ' El Salvador', 0),
(67, ' Equatorial Guinea', 1),
(68, ' Eritrea', 1),
(69, ' Estonia', 1),
(70, ' Ethiopia', 1),
(71, ' Falkland Islands (Malvinas)', 0),
(72, ' Faroe Islands', 1),
(73, ' Fiji', 1),
(74, ' Finland', 1),
(75, ' France', 1),
(76, ' France (Metropolitan)', 1),
(77, ' French Guiana', 1),
(78, ' French Polynesia', 1),
(79, ' French Southern Territories', 1),
(80, ' Gabon', 1),
(81, ' Gambia', 1),
(82, ' Georgia', 1),
(83, ' Germany', 1),
(84, ' Ghana', 1),
(85, ' Gibraltar', 0),
(86, ' Greece', 1),
(87, ' Greenland', 1),
(88, ' Grenada', 1),
(89, ' Guadeloupe', 1),
(90, ' Guam', 1),
(91, ' Guatemala', 0),
(92, ' Guinea', 1),
(93, ' Guinea-Bissau', 1),
(94, ' Guyana', 1),
(95, ' Haiti', 0),
(96, ' Heard Island and McDonald Islands', 1),
(97, ' Holy See (Vatican City State)', 1),
(98, ' Honduras', 1),
(99, ' Hong Kong', 1),
(100, ' Hungary', 1),
(101, ' Iceland', 1),
(102, ' India', 0),
(103, ' Indonesia', 1),
(104, ' Iran - Islamic Republic of', 1),
(105, ' Iraq', 1),
(106, ' Ireland', 1),
(107, ' Israel', 1),
(108, ' Italy', 1),
(109, ' Jamaica', 0),
(110, ' Japan', 1),
(111, ' Jordan', 1),
(112, ' Kazakhstan', 1),
(113, ' Kenya', 1),
(114, ' Kiribati', 1),
(115, ' Korea - Democratic People\'s Republic of', 1),
(116, ' Korea - Republic of', 0),
(117, ' Kosovo', 1),
(118, ' Kuwait', 1),
(119, ' Kyrgyzstan', 1),
(120, ' Lao People\'s Democratic Republic', 1),
(121, ' Latvia', 1),
(122, ' Lebanon', 1),
(123, ' Lesotho', 1),
(124, ' Liberia', 1),
(125, ' Libyan Arab Jamahiriya', 1),
(126, ' Liechtenstein', 1),
(127, ' Lithuania', 1),
(128, ' Luxembourg', 1),
(129, ' Macao', 1),
(130, ' Macedonia - the Former Yugoslav Republic of', 1),
(131, ' Madagascar', 1),
(132, ' Malawi', 1),
(133, ' Malaysia', 1),
(134, ' Maldives', 1),
(135, ' Mali', 1),
(136, ' Malta', 1),
(137, ' Marshall Islands', 1),
(138, ' Martinique', 1),
(139, ' Mauritania', 1),
(140, ' Mauritius', 1),
(141, ' Mayotte', 1),
(142, ' Mexico', 0),
(143, ' Micronesia - Federated States of', 1),
(144, ' Moldova - Republic of', 1),
(145, ' Monaco', 1),
(146, ' Mongolia', 1),
(147, ' Montserrat', 0),
(148, ' Morocco', 1),
(149, ' Mozambique', 1),
(150, ' Myanmar', 1),
(151, ' Namibia', 1),
(152, ' Nauru', 1),
(153, ' Nepal', 1),
(154, ' Netherlands', 1),
(155, ' Netherlands Antilles', 1),
(156, ' New Caledonia', 1),
(157, ' New Zealand', 1),
(158, ' Nicaragua', 1),
(159, ' Niger', 1),
(160, ' Nigeria', 1),
(161, ' Niue', 1),
(162, ' Norfolk Island', 1),
(163, ' Northern Ireland', 1),
(164, ' Northern Mariana Islands', 1),
(165, ' Norway', 1),
(166, ' Oman', 1),
(167, ' Pakistan', 0),
(168, ' Palau', 1),
(169, ' Palestinian Territory - Occupied', 1),
(170, ' Panama', 1),
(171, ' Papua New Guinea', 1),
(172, ' Paraguay', 1),
(173, ' Peru', 0),
(174, ' Philippines', 0),
(175, ' Pitcairn Islands', 0),
(176, ' Poland', 1),
(177, ' Portugal', 1),
(178, ' Puerto Rico', 1),
(179, ' Qatar', 1),
(180, ' Reunion', 1),
(181, ' Romania', 1),
(182, ' Russian Federation', 1),
(183, ' Rwanda', 1),
(184, ' Saint Helena, Ascension and Tristan da Cunha', 0),
(185, ' Saint Kitts and Nevis', 1),
(186, ' Saint Lucia', 1),
(187, ' Saint Pierre and Miquelon', 1),
(188, ' Saint Vincent and the Grenadines', 1),
(189, ' Samoa', 1),
(190, ' San Marino', 1),
(191, ' Sao Tome and Principe', 1),
(192, ' Saudi Arabia', 1),
(193, ' Senegal', 1),
(194, ' Seychelles', 1),
(195, ' Sierra Leone', 1),
(196, ' Singapore', 1),
(197, ' Slovakia', 1),
(198, ' Slovenia', 1),
(199, ' Solomon Islands', 1),
(200, ' Somalia', 1),
(201, ' South Africa', 1),
(202, ' South Georgia and the South Sandwich Islands', 1),
(203, ' South Sudan', 1),
(204, ' Spain', 1),
(205, ' Sri Lanka', 1),
(206, ' Sudan', 1),
(207, ' Suriname', 1),
(208, ' Svalbard and Jan Mayen', 1),
(209, ' Swaziland', 1),
(210, ' Sweden', 1),
(211, ' Switzerland', 1),
(212, ' Syrian Arab Republic', 1),
(213, ' Taiwan (Province of China)', 1),
(214, ' Tajikistan', 1),
(215, ' Tanzania (United Republic of)', 1),
(216, ' Thailand', 1),
(217, ' Togo', 1),
(218, ' Tokelau', 1),
(219, ' Tonga', 1),
(220, ' Trinidad and Tobago', 1),
(221, ' Tunisia', 1),
(222, ' Turkey', 1),
(223, ' Turkmenistan', 1),
(224, ' Turks and Caicos Islands', 0),
(225, ' Tuvalu', 1),
(226, ' Uganda', 1),
(227, ' Ukraine', 1),
(228, ' United Arab Emirates', 1),
(229, ' United Kingdom', 0),
(230, ' United States', 1),
(231, ' United States Minor Outlying Islands', 1),
(232, ' Uruguay', 1),
(233, ' Uzbekistan', 1),
(234, ' Vanuatu', 1),
(235, ' Venezuela', 1),
(236, ' Vietnam', 0),
(237, ' Virgin Islands - British', 0),
(238, ' Virgin Islands - U.S.', 1),
(239, ' Wallis and Futuna', 1),
(240, ' Western Sahara', 1),
(241, ' Yemen', 1),
(242, ' Yugoslavia', 1),
(243, ' Zaire', 1),
(244, ' Zambia', 1),
(245, ' Zimbabwe', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE `tbl_news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `heading` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`id`, `title`, `heading`, `body`, `timestamp`) VALUES
(1, 'Changed', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla non metus. pulvinar consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor lacinia diam quis imperdiet. Proin vitae iaculis nisl. Cras eleifend quam lectus, sed bibendum libero convallis at. Nulla sagittis convallis neque at scelerisque. Pellentesque placerat bibendum magna, semper accumsan sem congue nec. Etiam viverra, ipsum vel suscipit varius, neque odio suscipit orci, et molestie metus mi a dui. Sed eu risus vel lacus varius varius. Vivamus blandit arcu quis turpis molestie, vulputate vulputate mi ullamcorper. Nunc lacinia eget libero ac cursus. Ut laoreet magna vitae lorem ornare scelerisque. Sed gravida imperdiet leo, ac mollis urna venenatis sit amet. Sed vitae lacus in libero tempor elementum. Cras eleifend hendrerit velit, vel tincidunt enim ornare nec. Proin nec purus leo.', '2016-08-15 20:04:10'),
(2, 'Testing new article', 'Hello World', 'Awesome', '2016-08-15 20:03:21'),
(3, 'Testing new article', 'Hello World', 'Awesome', '2016-08-15 20:03:26'),
(4, 'Hi', 'cool', 'fjkldaf;jad', '2016-08-15 20:05:36'),
(5, 'sdf', 'asdf', 'asdf', '2016-08-15 20:09:18');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_status`
--

CREATE TABLE `tbl_status` (
  `id` tinyint(4) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_status`
--

INSERT INTO `tbl_status` (`id`, `status`) VALUES
(1, 'Unpaid'),
(2, 'In Progress'),
(3, 'Submitted'),
(4, 'Denied'),
(5, 'Accepted');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admins`
--
ALTER TABLE `tbl_admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`username`);

--
-- Indexes for table `tbl_applications`
--
ALTER TABLE `tbl_applications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `country` (`birth_country`),
  ADD KEY `country_address` (`address_country`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `tbl_applications_family`
--
ALTER TABLE `tbl_applications_family`
  ADD PRIMARY KEY (`id`),
  ADD KEY `application_id` (`application_id`),
  ADD KEY `relationship` (`relationship`);

--
-- Indexes for table `tbl_applications_photos`
--
ALTER TABLE `tbl_applications_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `application_id` (`application_id`);

--
-- Indexes for table `tbl_countries`
--
ALTER TABLE `tbl_countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_news`
--
ALTER TABLE `tbl_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_status`
--
ALTER TABLE `tbl_status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_admins`
--
ALTER TABLE `tbl_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `tbl_applications`
--
ALTER TABLE `tbl_applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `tbl_applications_family`
--
ALTER TABLE `tbl_applications_family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_applications_photos`
--
ALTER TABLE `tbl_applications_photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tbl_countries`
--
ALTER TABLE `tbl_countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=246;
--
-- AUTO_INCREMENT for table `tbl_news`
--
ALTER TABLE `tbl_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbl_status`
--
ALTER TABLE `tbl_status`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_applications`
--
ALTER TABLE `tbl_applications`
  ADD CONSTRAINT `tbl_applications_ibfk_1` FOREIGN KEY (`birth_country`) REFERENCES `tbl_countries` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tbl_applications_ibfk_2` FOREIGN KEY (`address_country`) REFERENCES `tbl_countries` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `tbl_applications_family`
--
ALTER TABLE `tbl_applications_family`
  ADD CONSTRAINT `tbl_applications_family_ibfk_1` FOREIGN KEY (`application_id`) REFERENCES `tbl_applications` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
