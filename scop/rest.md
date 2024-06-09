# Rest

## Overview

The Rest class can be accesed within a [Part](part.md) object of a [Scopul](scopul.md) object. It has 2 properties: `measure`, `length`

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
<br>

## Creating a Rest object
#### `Rest(self, music21=None, length=None, measure=None)`


You can create your own note class, which you may use to append to the existing MIDI or use for other purposes

##### Args
- `m21` : a music21 object
- `length`: The length of the rest in quarter length. 
    - Ex. `1.5`, which is a dotted-quarter note
- `measure`: The measure number of the note

There are two ways to create a Rest class: 
- By passing in a music21 object, 
- Or by specifying the attributes your self

To make it your self:

```python
from Scopul import Rest

my_note = Rest(length=1.5, measure=5)
```
<br>

To use a music21 object to create a Note object:
```python
from Scopul import Note
from music21 import note

music21_rest = note.Rest(quarterlength=4)
scopul_note = Note(m21=music21_rest) # Automatically sets up all the attributes
```

<br>
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



- `length`
    - Gets the length of the rest in quarter length 
    - Returns
        - A int that indicates the rest's quarter length. For example: 1
    - Example
        ```python
        from Scopul import Scopul
        
        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_rest = scop.parts[0].sequence[1] # Sample index
        print(random_rest.length)

        # Sample output
        >>> 0.25
        ```

<br>

- `music21`
  - the music21 property returns the [Music21 Object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_02_notes.html) for the Rest object

  - Example
    ```python
    from music21 import note
    from Scopul import Scopul, Rest

    rest = Rest(length=1.5)
    print(rest.music21)

    # Sample output
    >>> <music21.note.Rest>
    ```



