# Chord

## Overview

The chord class can be accesed within a [Part](part.md) object of a [Scopul](scopul.md) object. It has 4 properties: `name`, `measure`, `velocity`, `lenght`

Here's an example of how you could get a chord object:

```python
from Scopul import Scopul

scop = Scopul("test.mid")

# Get parts
parts = scop.parts

# Get random part's sequence
random_part = parts[0].sequence

# Lets say, for example, 
# random_part = [<Sequence.Chord object at 0x0000024774D85190>, <Sequence.Rest object at 0x0000024774D1D9D0>]

chord = random_part[0] # Getting the first object in the sequence, which is a chord
```

## Properties



- `measure`
    - Gets the measure in which this chord appeared in
    - Returns
        - an int, representing the measure number. For example: `5`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting a chord by going into a part's sequence, if this is confusing, go to Part class section
        random_chord = scop.parts[0].sequence[0] # Sample index
        print(random_chord.measure)

        # Sample output
        >>> 1
        ```

<br>

- `notes`
    - Retrieves all the notes played in this chord
    - Returns
        - A list of [Note](note.md) elements. For example: `[<Sequence.Note object at 0x000002E0651DCD10>]`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting a chord by going into a part's sequence, if this is confusing, go to Part class section
        random_chord = scop.parts[0].sequence[0] # Sample index
        print(random_chord.notes)

        # Sample output
        >>> [<Sequence.Note object at 0x000002E0651DCD10>, <Sequence.Note object at 0x000002E0651E59D0>, <Sequence.Note object at 0x000002E0651E4050>]
        ```

<br>

- `lenght`
    - Gets the lenght of the chord in your standard english form
    - Returns
        - A string that indicates the chord's lenght. For example: `quarter`
    - Example
        ```python
        from Scopul import Scopul
        
        scop = Scopul("test.mid")

        # Getting a chord by going into a part's sequence, if this is confusing, go to Part class section
        random_chord = scop.parts[0].sequence[0] # Sample index
        print(random_chord.lenght)

        # Sample output
        >>> "whole"
        ```



