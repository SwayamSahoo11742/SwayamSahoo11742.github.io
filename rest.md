# Rest

## Overview

The Rest class can be accesed within a [Part](part.md) object of a [Scopul](scopul.md) object. It has 2 properties: `measure`, `lenght`

Here's an example of how you could get a Rest object:

```python
from Scopul import Scopul

scop = Scopul("test.mid")

# Get parts
parts = scop.parts

# Get random part's sequence
random_part = parts[0].sequence

# Lets say, for example, 
# random_part = [<Sequence.Note object at 0x0000024774D85190>, <Sequence.Rest object at 0x0000024774D1D9D0>]

rest = random_part[1] # Getting the second object in the sequence, which is a rest
```

## Properties



- `measure`
    - Gets the measure in which this rest appeared in
    - Returns
        - an int, representing the measure number. For example: `5`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting a rest by going into a part's sequence, if this is confusing, go to Part class section
        random_rest = scop.parts[0].sequence[1] # Sample index
        print(random_rest.measure)

        # Sample output
        >>> 1
        ```

<br>



- `lenght`
    - Gets the name of the rest in "letter-name octave" format
    - Returns
        - A string that indicates the rest's lenght. For example: `quarter`
    - Example
        ```python
        from Scopul import Scopul
        
        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[1] # Sample index
        print(random_note.lenght)

        # Sample output
        >>> "16th"
        ```



