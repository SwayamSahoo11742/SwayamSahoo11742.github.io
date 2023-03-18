# Chord

## Overview

The chord class can be accesed within a [Part](part.md) object of a [Scopul](scopul.md) object. It has 4 properties: `name`, `measure`, `velocity`, `length`

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
<br>

## Creating a Chord object
#### `Chord(self, m21=None, notes: list = None, measure=None)`


You can create your own note class, which you may use to append to the existing MIDI or use for other purposes

##### Args
- `m21` : A music21 object
- `notes`: A list of [Note](note.md) objects
- `measure`: The measure number of the note

There are two ways to create a Note class: 
- By passing in a music21 object, 
- Or by specifying the attributes your self

To make it your self:

```python
from Scopul import Note, Chord

N1 = Note(name="C#4", lenght=1.5)
N2 = Note(name="E4", lenght=1.5)
N3 = Note(name="G4", lenght=1.5)

my_note = Chord(notes=[N1, N2, N3], measure=5)
```
<br>

To use a music21 object to create a Note object:
```python
from Scopul import Note
from music21 import chord

music21_chord = chord.Chord(['D', 'F#', 'A'])
scopul_note = Note(m21=music21_chord) # Automatically sets up all the attributes
```

<br>
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

- `length`
    - Gets the length of the chord in quarter length
    - Returns
        - An int that indicates the chord's quarter length. For example: 1.5
    - Example
        ```python
        from Scopul import Scopul
        
        scop = Scopul("test.mid")

        # Getting a chord by going into a part's sequence, if this is confusing, go to Part class section
        random_chord = scop.parts[0].sequence[0] # Sample index
        print(random_chord.length)

        # Sample output
        >>> 1.5
        ```
<br>

- `music21`
  - the music21 property returns the [Music21 Object](https://web.mit.edu/music21/doc/moduleReference/moduleChord.html) for the Chord object

  - Example
    ```python
    from music21 import note
    from Scopul import Scopul, Rest

    N1 = Note(name="C4", lenght=1.5)
    N2 = Note(name="E4", lenght=1.5)
    N3 = Note(name="G4", lenght=1.5)


    rest = Chord(notes=[N1, N2, N3])
    print(rest.music21)

    # Sample output
    >>> <music21.chord.Chord C E G>
    ```