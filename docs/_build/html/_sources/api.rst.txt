API
==========

Creating and Modifying the Object
-----------------------------------

.. js:class:: AR(width,height)

    The main class that defines an abstract rectangle with a set width and height. 
    All the other parameters, such as aspect ratio are generated from that.

    :param number width: Width of the virtual resolution.
    :param number height: Height of the virtual resolution.

.. js:function:: AR.setDimensions(width,height)

    Resets the dimensions of the object.

    :param number width: New width of the virtual resolution.
    :param number height: New height of the virtual resolution.
    :returns: *void*

.. js:function:: AR.scaleWidth(newHeight)

    Scales the width based on a desired height whilst maintaining aspect ratio.

    :param number newHeight: New height of the virtual resolution.
    :returns: *void*

.. js:function:: AR.scaleHeight(newWidth)

    Scales the height based on a desired width whilst maintaining aspect ratio.

    :param number newWidth: New width of the virtual resolution.
    :returns: *void*

.. js:function:: AR.scaleDimensions(scaleRatio)

    Scales the height and width based on a ratio. Example: 100x50 scaled by 2 = 200x100 (effectively 4x area/pixels)

    :param number scaleRatio: Ratio by which to scale. 0.5=50%,1 = 100%,2=200%...
    :returns: *void*

.. js:function:: AR.scaleArea(scaleRatio)

    Powerful function to scale the dimensions based on area. Example 100x50 scaled by 2 = (141.421356237 x 70.7106781187).
    The area (total units/pixels) goes from 5000 to 10000.

    :param number scaleRatio: Ratio by which to scale. 0.5=50%,1 = 100%,2=200%...
    :returns: *void*

Getting Object Information
----------------------------

.. js:function:: AR.getAR()

    Gets the specific aspect ratio (width/height) of the object.

    :returns: (*float*) The aspect ratio. 

.. js:function:: AR.getARString()

    Gets the readable aspect ratio ie:(16:9) of the object.

    :returns: (*string*) The readable aspect ratio. 

.. js:function:: AR.getWidth()

    Gets the width of the object.

    :returns: (*number*) The width. 

.. js:function:: AR.getHeight()

    Gets height of the object.

    :returns: (*number*) The height. 

.. js:function:: AR.toString()

    Returns the object in readable form

    :returns: (*string*) The object's string representation. 

    Example:

    .. code-block:: batch

        Aspect Ratio Object: 
        Width: 1920 
        Height: 1080 
        Aspect Ratio: 1.7777777777777777 (16:9)

