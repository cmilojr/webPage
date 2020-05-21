create database myshop;
use myshop;
SELECT * FROM compras ;
-- --------------------------------------------------------------------------------------------
-- Cambios a la tabla producto

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `idProductos` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `estado` boolean NOT NULL,
  `precioP` int(11) NOT NULL,
  `nombreP` varchar(100) NOT NULL,
  `stock` int(11) NOT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `Vendedor_Usuario_username` varchar(200) NOT NULL,
  PRIMARY KEY (`idProductos`,`Vendedor_Usuario_username`),
  KEY `fk_Productos_Vendedor1_idx` (`Vendedor_Usuario_username`),
  CONSTRAINT `fk_Productos_Vendedor1` FOREIGN KEY (`Vendedor_Usuario_username`) REFERENCES `vendedor` (`Usuario_username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Datos a insertar
INSERT INTO `productos` VALUES (1,true,20000,'Base ligera Engol',30,'Bases','hi'),(2,true,45000,'Sombras rude cosmetics',25,'Sombras','holi');

-- -----------------------------------------------------------------------------------------
