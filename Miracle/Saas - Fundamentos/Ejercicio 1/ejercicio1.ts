/* Ejercicio 1.1
   
Explique en qué se diferencian el flujo de trabajo con CSS tradicional y con CSS preprocesado.
Respuesta: Diferencias CSS tradicional y CSS preprocesado:

   Sintaxis y declaración
Preprocesado: se puede declarar en cualquier parte de nuestro archivo.
Tradicional: deben estar encerrada en un bloque (se debe hacer uso de la función var() para poder utilizar variables).

   Scope
Preprocesado: maneja un scope por bloque.
Tradicional: lo hacen por medio del DOM.

   Interpolación
Preprocesado: las variables pueden guardar valores y además esos valores se pueden interporlar.
Tradicional: las variables sólo sirven para almacenar valores.

   Operaciones
Preprocesado: se hace como en cualquier otro lenguaje.
Tradicional: necesita la función calc().

   Redefinir valor de variable
Preprocesado: no se pueden redifinir en ámbito de scope si su valor no es utilizado.
Tradicional: sí puede gracias a que se manejan por DOM. */