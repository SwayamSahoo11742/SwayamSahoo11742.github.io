# Note

## Overview

The Note class can be accesed within a [Part](part.md) object of a [Scopul](scopul.md) object. It has 4 properties: `name`, `measure`, `velocity`, `lenght`

Here's an example of how you could get a Note object:

```python
scop = Scopul("test.mid")

# Get parts
parts = scop.parts

# Get random part's sequence
random_part = parts[0].sequence

# Lets say, for example, 
# random_part = [<Sequence.Note object at 0x0000024774D85190>, <Sequence.Rest object at 0x0000024774D1D9D0>]

note = random_part[0] # Getting the first object in the sequence, which is a note
```

## Properties

- `name`
    - Gets the name of the note in "letter-name octave" format
    - Returns
        - A string in "letter-name octave" format. For example: `F3`
    - Example
        ```python
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
        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[0] # Sample index
        print(random_note.velocity)

        # Sample output
        >>> 112
        ```

<br>

- `lenght`
    - Gets the lenght of the note in your standard english form
    - Returns
        - A string that indicates the note's lenght. For example: `quarter`
    - Example
        ```python
        scop = Scopul("test.mid")

        # Getting a note by going into a part's sequence, if this is confusing, go to Part class section
        random_note = scop.parts[0].sequence[0] # Sample index
        print(random_note.lenght)

        # Sample output
        >>> "eighth"
        ```



