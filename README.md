# Taller 2 Pruebas Automáticas - End to end testing

## Integrantes

- Juan Sebastián Mendez
- Juan José Villegas

## PlayWright vs Puppeteer

PlayWright es una herramienta de código abierto escrita en Node.js. Fue creada por Microsoft para automatizar pruebas en browsers basados en Chromium, Firefox, y Webit a través de una API.

Puppeteer y Playwright fueron desarrollados por el mismo equipo de desarrollo. Sin embargo, playwright es visto por los mismos desarrolladores como el nuevo estándar y sucesor de puppeteer. Al tener conceptos similares, portar código de puppeteer a playwright es una tarea sencilla. Muy seguramente el equipo va a dejar de dar soporte a Puppeteer en el futuro próximo.

Las principales ventajas de PlayWright comparado con Puppeteer son las siguientes:

* Playwright tiene un API más amigable que puppeteer.
* Playwright soporta más tipos de browsers: Chromium, Firefox y Webkit. Mientras tanto puppeteer sólo soporta Chromium.
* Playwright fue diseñado como nativo para la nube (cloud-native) a través de su abstracción de _BrowserContext_, permitiendo ser usado localmente o como un servicio.
* Playwright también es una alternativa a WebDriver, que es el standard actual de automatización y prueba para la W3C.
* Playwright planea sincronizar su ciclo de desarrollo con el ciclo de desarrollo de Chromium, por lo que aseguran estar siempre al día, dando total soporte a este tipo de navegador.
* Playwright soporta motores de navegadores en Windows, macOS, y Linux. Todos los navegadores soportando modo headless.

Se espera que Playwright sea lanzado oficialmente (V1.0 stable) en algún momento de 2020. Mientras tanto, se puede ver el estado del desarrollo [aquí](https://aslushnikov.github.io/isplaywrightready/).

