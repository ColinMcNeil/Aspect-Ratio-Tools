Installation
------------
This is a node package, remember to install node and NPM.

Install |$project| by running:

.. code-block:: bash

    npm install --save aspect-ratio-tools


Quickstart
------------
.. code-block:: javascript

    const {AR} = require('aspect-ratio-tools');
    var myAR = new AR(1920,1080);
    console.log(myAR.toString())
