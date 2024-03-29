const products = [
  {
    price: 500,
    stock: 5,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_801366-MCO69299012103_052023-F.webp",
    description:
      "FIFINE Micrófono dinámico, micrófono de PC de grabación de podcast XLR/USB para transmisión vocal de juegos de voz, micrófono de metal con silencio de micrófono, conector de auriculares, control de volumen de monitoreo, amplificadores de parabrisas K688 Calidad de sonido limpia: con durabilidad y adaptabilidad, el micrófono dinámico XLR para podcast, con SPL de 130 dB, no distorsionará el audio de la grabación de voz, video o música, para mantener su originalidad. El patrón cardioide bastante direccional se ocupa del ruido de fondo, como discos duros o ventiladores de computadora. El micrófono de grabación de estudio ofrece una voz original detallada sin mucho procesamiento de ruido adicional.",
    sale: false,
    name: "Fifine Micrófono Dinámico, Micrófono De Pc De Grabación",
  },
  {
    price: 150,
    stock: 10,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_930449-MLA48170552567_112021-F.webp",
    description:
      "Con este kit de teclado y mouse Weibo llevarás tus partidas a otro nivel. Destinado a un público gamer, potencia tu performance en distintos juegos. Con este combo, podrás darle un uso intensivo a estos dispositivos y disfrutar de interminables horas de diversión. Calidad y durabilidad Este kit incluye con un periférico que posee una arquitectura mecánica. ¿Qué quiere decir esto? Que su teclado te permitirá disfrutar de una alta calidad en sus teclas. A diferencia de los de membrana, este tipo de dispositivos tienen un amplio ciclo de vida que promedia las 50 millones de pulsaciones",
    sale: true,
    name: "teclado y mouse gamer Weibo WB-550",
  },
  {
    price: 100,
    stock: 0,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697316-MLA48378428229_112021-F.webp",
    description:
      "El combo de teclado y mouse Logitech es perfecto para ayudarte a desarrollar tus actividades diarias. Esta combinación está adaptada para realizar distintas tareas, ya sean laborales, escolares o de cualquier índole. Sensor de alta precisión El mouse del combo posee un sensor óptico de alta precisión, el cual te permitirá redirigir el cursor de una manera más exacta y sensible que el resto de los sistemas tradicionales",
    sale: false,
    name: "teclado y mouse inalámbrico Logitech K380 + M350",
  },
  {
    price: 1000,
    stock: 12,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_684433-MLA51525989001_092022-F.webp",
    description:
      "La bicicleta es uno de los vehículos más elegidos como medio de transporte, y esta tendencia se incrementó aún más con la pandemia del coronavirus. Además de su uso para fines recreativos y deportivos, tiene un impacto muy positivo en el ambiente y el bienestar de personas de todas las edades. Sus beneficios son múltiples: es accesible, ocupa poco espacio, no genera contaminación y hace bien a la salud. ¡Únete a esta ola sustentable que avanza en todo el mundo! Desafía tus capacidades. Las mountain bikes, o bicicletas de montaña son el medio de transporte perfecto para tus aventuras y alcanzar aquellos lugares recónditos que querés conocer. Sus materiales y diseños están pensados para la acción, son resistentes y cuentan con mejor maniobrabilidad que otros modelos, brindándote mayor tracción. Además, sus llantas con dibujos marcados favorecen el agarre en terrenos difíciles.",
    sale: true,
    name: "Mountain bike Roadmaster Wind R29 24v frenos de disco mecánico cambios",
  },
  {
    price: 2000,
    stock: 7,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_629174-MLU72700299673_112023-F.webp",
    description:
      "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de audífonos se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
    sale: false,
    name: "Audífonos Sony Noise Cancelling Bluetooth Hi-res Wh-1000xm4 Color Azul",
  },
  {
    price: 1200,
    stock: 2,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_714370-MLA52023466956_102022-F.webp",
    description:
      "Mejora el aspecto de tu cocina con Whirlpool. En simples pasos puedes disfrutar de tus comidas favoritas. De fácil limpieza, con múltiples funciones adaptadas a tus necesidades. Con su función Crispy podrás cocinar, asar a la parrilla, hornear, preparar platos crujientes, dorar alimentos, consiguiendo que permanezcan crocantes por fuera y tiernos por dentro. Para destacar, este microondas cuenta con 5 diferentes niveles de cocción y programas. Disfruta todas tus comidas con mínimo esfuerzo y máximo sabor",
    sale: false,
    name: "Microondas Whirlpool 20lt Silver Acabado En Espejo - Wm1807d 120V",
  },
  {
    price: 3000,
    stock: 5,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_760722-MCO44593795674_012021-F.webp",
    description:
      "Ya sea para estudiar o trabajar, este escritorio Maderkit te ayudará a crear un ambiente confortable y sumar orden y funcionalidad a tus horas productivas. Su superficie no sólo te servirá de apoyo, sino que te permitirá tener los recursos al alcance de la mano para facilitar tus tareas.",
    sale: false,
    name: "Escritorio Básico Con Repisa Color Duna Maderkit M01536 Color Crema",
  },
  {
    price: 1000,
    stock: 4,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_923145-MLA54095248890_032023-F.webp",
    description:
      "Descubre infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados. Además, el dispositivo cuenta con cámara frontal de 16 Mpx para que puedas sacarte divertidas selfies o hacer videollamadas.",
    sale: false,
    name: "Xiaomi Pocophone Poco X5 Pro 5G Dual SIM 256 GB negro 8 GB RAM",
  },
  {
    price: 5000,
    stock: 0,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_713886-MLU72627522494_112023-F.webp",
    description:
      "Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, hará que disfrutes de una experiencia incomparable.",
    sale: false,
    name: "Televisor Samsung Cu7000 Crystal Uhd 55 pulgadas 2023",
  },
  {
    price: 100,
    stock: 13,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_697687-MLM54492150777_032023-F.webp",
    description:
      "Con 90 años de trayectoria, Lego es uno de los principales fabricantes mundiales de materiales de juego. Para la marca, el juego es vital en el desarrollo de todos los niños y niñas, ya que les ayuda a prosperar en un mundo complejo y desafiante. Su principal meta es lograr inspirar y desarrollar a los constructores del mañana, además de generar un impacto positivo en la sociedad y el planeta. Los juegos de Lego brindan la posibilidad de un descubrimiento permanente al ofrecer la mágica oportunidad de crear algo nuevo cada vez.",
    sale: true,
    name: "Lego Botanical Collection Ramo De Flores Silvestres 10313Lego Botanical Collection Ramo De Flores Silvestres 10313",
  },
  {
    price: 72,
    stock: 12,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_718650-MLU72628158418_112023-F.webp",
    description:
      "Durante décadas Oster está comprometida en el lanzamiento de productos domésticos para que sientas la pasión de crear nuevas recetas con facilidad. Descubre un mundo de posibilidades en la cocina con la licuadora BLSTAFB013 y dale rienda suelta a la creatividad.",
    sale: false,
    name: "ctifit Con Vaso Portátil Trita Color Negro 110V",
  },
  {
    price: 45,
    stock: 0,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_832722-MCO43172009154_082020-F.webp",
    description:
      "La Silla Serie Suiza es el modelo ideal para aquellos que buscan resistencia, comodidad y fácil manejo. Entre sus principales ventajas destacar que se trata de un modelo totalmente flexible, de fácil de manejo y limpieza.",
    sale: false,
    name: "Silla Eames Plus Restaurante Comedor Cocina Suiza",
  },
  {
    price: 2000,
    stock: 13,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_887581-MCO49840570178_052022-F.webp",
    description:
      "El Sofá Providencia está tapizado con tela de microfibra en un estilo moderno y minimalista. Es 2 en 1 ya que como sofá se adapta a tu espacio y se convierte en cama por lo que puedes recibir visitas mientras ahorras espacio. Su tapiz minimalista le da un estilo diferente a tu sala. Puedes encontrarlo en diferentes colores que se adaptan fácilmente a estilo de decoración. Su estructura firme de madera te garantiza la calidad de su fabricación y su relleno de espuma de alta densidad te brinda comodidad en cualquiera de sus modalidades.",
    sale: true,
    name: "Sofá Cama Providencia Urban Design, Tapiz Moderno Y Madera",
  },
  {
    price: 100,
    stock: 13,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_686936-MCO48580053016_122021-F.webp",
    description:
      "La mochila para juegos activa Lenovo Legion es un testimonio de lo que podrían ser los juegos y los jugadores. Forjado con materiales PET reciclados, se diseñó para permitir que los jugadores con conciencia ambiental lleven la cultura hacia un futuro más verde. Además, no olvida la calidad, ya que ofrece diversas características, como compartimientos y bolsillos dedicados para los artículos, un compartimiento para un equipo portátil/teclado de 17 y mucho más",
    sale: true,
    name: "Mochila Gamer Lenovo Legion Active",
  },
  {
    price: 15,
    stock: 0,
    photoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_998164-MCO43942880781_102020-F.webp",
    description:
      "El sartén de hierro fundido de 20 cm es la opción perfecta para preparar huevos revueltos, pasa bocas, hornear un delicioso postre o quizá un buen corte de carne. Ideal para preparar desayunos y postres para 2 personas. Disfruta de los beneficios del hierro fundido como la distribución y retención del calor que permitirá una cocción uniforme de tus alimentos y los mantendrá calientes durante mucho más tiempo.",
    sale: false,
    name: "Sartén De Hierro Fundido 20 Cm Victoria",
  },
];

export default products;
