# Note

## Overview

The Note class can be accesed within a [Part](part.md) object of a [Scopul](scopul.md) object. It has 4 properties: `name`, `measure`, `velocity`, `length`, `music21`

Here's an example of how you could get a Note object with the Scopul class:

```python
from Scopul import Scopul

scop = Scopul("test.mid")

# Get parts
parts = scop.parts

# Get random part's sequence
random_part = parts[0].sequence

# Lets say, for example, 
# random_part = [<Sequence.Note object at 0x0000024774D85190>, <Sequence.Rest object at 0x0000024774D1D9D0>]

note = random_part[0] # Getting the first object in the sequence, which is a note
```
<br>
## Creating a Note object
#### `Note(self, m21=None, name=None, length=None, velocity=None, measure=None)`


You can create your own note class, which you may use to append to the existing MIDI or use for other purposes

##### Args
- `m21` : a music21 object
- `name` : note's name in "letter octave" format. 
    - Ex. `"C4"`, which is middle C
- `length`: The lenght of the note in quarter length. 
    - Ex. `1.5`, which is a dotted-quarter note
- `velocity`: The velocity of the note as an int
- `measure`: The measure number of the note

There are two ways to create a Note class: 
- By passing in a music21 object, 
- Or by specifying the attributes your self

To make it your self:

```python
from Scopul import Note

my_note = Note(name="C4", length=1.5, velocity=2, measure=5)
```
<br>

To use a music21 object to create a Note object:
```python
from Scopul import Note
from music21 import note

music21_note = note.Note("C4", quarterLenght=4)
scopul_note = Note(m21=music21_note) # Automatically sets up all the attributes
```
<br>
## Properties

- `name`
    - Gets the name of the note in "letter-name octave" format
    - Returns
        - A string in "letter-name octave" format. For example: `F3`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[0] # Sample index
        print(random_note.name)

        # Sample output
        >>> "F3"
        ```

<br>

- `measure`
    - Gets the measure in which this note appeared in
    - Returns
        - an int, representing the measure number. For example: `5`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[0] # Sample index
        print(random_note.measure)

        # Sample output
        >>> 1
        ```

<br>

- `velocity`
    - Retrieves the velocity of the note played
    - Returns
        - An int, representing the velocity
        - None, if the MIDI file doesn't spepcify the note's velocity
            - Most of the MIDIs do not have velocity specified
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[0] # Sample index
        print(random_note.velocity)

        # Sample output
        >>> 112
        ```

<br>

- `length`
    - Gets the length of the note in quarter lenght
    - Returns
        - An int or float that indicates the note's quarter length. For example: 0.5
    - Example
        ```python
        from Scopul import Scopul
        
        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[0] # Sample index
        print(random_note.length)

        # Sample output
        >>> 0.5
        ```
<br>

- `music21`
  - the music21 property returns the [Music21 Object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_02_notes.html) for the Note object

  - Example
    ```python
    from music21 import note
    from Scopul import Scopul, Note

    note = Note(name="C4", length=1.5)
    print(note.music21)

    # Sample output
    >>> <music21.note.Note C>
    ```


