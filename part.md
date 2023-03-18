# Part

## Overview
Part is a class to fetch seperate parts of a [Scopul](scopul.md) object (ie. flute part, piano part). It provides 3 properties: `part`, `name`, `sequence` and 8 methods: `get_notes()`, `get_note_count()`, `get_rests()`, `get_rest_count()`, `get_chords()`, `get_chord_count()`,`get_measure()`, `get_highest_note()`

Here's an example of how to get a Part object from a Scopul instance:

```python
from Scopul import Scopul

scop = Scopul("test.mid")

# Get all the parts
parts = scop.parts
# parts = [<Sequence.Part object at 0x000001C8065EBCD0>] **this list can be longer

# Get sample flute part
flute_part = parts[0]
print(flue_part)

# Sample output
>>> <Sequence.Part object at 0x000001C8065EBCD0>
```
<br>
## Properties

- `name`
    - Retrieves the name specified in th emidi file for this perticular part
    - Returns
        - A str, representing the part name. For example:`"Clarinet"`
    
    - Example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]
        print(random_part.name)

        # Sample output
        >>> "Piano"
        ```

    - Can be used to find a certain part in a midi by iterating through it. For example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Lets say we want a flute part
        flute_part = None

        # Iterate through the parts
        for part in parts:
            # Check if its the flute part
            if part.name == "Flute"
                flute_part = part
                break
        ```
<br>

- `sequence`
    - Retrieves the sequence of rests, notes and chords played in the part
    - Returns
        - A list consisting of [Note](note.md), [Rest](rest.md), and [Chord](chord.md) objects 

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]
        print(random_part.sequence)

        # Sample output
        >>>[<Sequence.Chord object at 0x0000022DEED33390>, <Sequence.Rest object at 0x0000022DEED34FD0>, <Sequence.Note object at 0x0000022DEECCEF10>, <Sequence.Note object at 0x0000022DEECCC910>, <Sequence.Note object at 0x0000022DEECDC450>]
        ```
<br>

- `part`
    - Retrieves a [Music21 stream part object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_06_stream2.html)

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        print(random_part.part)

        # Sample output
        >>> <music21.stream.Part 0x1e345fd0a50>
        ```

<br>

## Methods
- `search_rhythm(self, rhythm: list)`
    - Gets all occurences of a specified rhythm in the Part
    - Args
        - `rhythm`: a list where each element represents a rhythm
            - the elements in the list must be the note's quarter length (For example, 1 would be quarter note, 0.5 will be eight note)
                - For example:
                    `[1, 1, 0.5, 0.5, 2]`
                    This  will be a rhythm of quarter, quarter, eighth, eighth, half

            - Can specify note type using the following format:
                - `[[type, quarterlength], [type, quarterlength] ...]`

                - For Example:
                    `[["c", 0.75], ["r", 0.25]]`
                    This will search for rhythms with dotted-eight chords followed by 16th rest

                - Types:
                    `r`: Rest
                    `c`: Chord
                    `n`: Note
    - Returns
        - a list of lists, with each list containing the Scopul musical element objects that satisfy the rhythm
    
    - For example:
        ```python
        from Scopul import Scopul

        scopul_object = Scopul("test.mid")
        part = scopul_object.parts[1] # Sample part

        # Simple search
        part.search_rhythm([1, 2, 0.5, 4]) # This will search for quarter, half, eighth whole

        # Complex search
        part.search_rhythm([
            ["c", 2]
            ["r", 0.5] # This will search for a half chord, eighth rest, eighth chord, eighth note
            ["c", 0.5]
            ["n", 0.5]
            ])


- `get_measure(m : int | list)`
    - Fetches a sequence of Note, Rest and Chord objects
    - Args
        `m`: the measure number you want to extract. Can be an int, indicating a single measure, or a list in [start, end] format, indicating a range of measures
    - Returns
        - A list consisting of Scopul musical elements (Rest, Note and Chord objects)
    - Raises:
        - **ValueError**: if inputted negative number, or a list with not lenght of 2
        - **TypeError**: if input is not a list of int or a singular int

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Get measure 2 with int input
        print(random_part.get_measure(2))

        # Sample output
        >>> [<Sequence.Note object at 0x0000022DEECCEF10>, <Sequence.Rest object at 0x0000022DEECCC910>]

        # Get measure 2 to 5 with list input
        print(random_part.get_measure([2,5]))

        # Sample output
        >>> [<Sequence.Note object at 0x000001446B59CF50>, <Sequence.Note object at 0x0000014466563890>, <Sequence.Note object at 0x000001446B69C310>, <Sequence.Note object at 0x000001446B6F3E90>, <Sequence.Note object at 0x000001446B6F7DD0>, <Sequence.Note object at 0x000001446B69EBD0>, <Sequence.Note object at 0x000001446B689150>, <Sequence.Note object at 0x000001446B702110>, <Sequence.Note object at 0x000001446B702610>, <Sequence.Note object at 0x000001446B6A5990>, <Sequence.Note object at 0x000001446B680090>, <Sequence.Note object at 0x000001446B680950>, <Sequence.Note object at 0x000001446B6BB490>, <Sequence.Note object at 0x000001446B6BB8D0>, <Sequence.Note object at 0x000001446B688490>, <Sequence.Note object at 0x000001446B6C3A10>, <Sequence.Note object at 0x000001446B6C3510>, <Sequence.Note object at 0x000001446B6C0B10>, <Sequence.Note object at 0x000001446B688350>, <Sequence.Note object at 0x000001446B689DD0>]
        ```

<br>

- `get_highest_note`
    - Retrieves teh highest note in a given sequence

    - Args:
        - seq: a list of Scopul musical symbols (Rest, Chord, Note)

    - Returns:
        - a [Note](note.html) object

    - Raises:
        - InvalidMusicElementError: if found a type that is not Rest, Note or Chord

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting sequence
        sequence = random_part.sequence

        # Extracting the notes
        highest = random_part.get_highest_note(sequence)
        print(highest)

        # Sample output
        >>> <Sequence.Note object at 0x0000027C6AD87050>
        ```
<br>

- `get_notes(seq : list)`
    - Retrieves all the [Note](note.html) objects in the current part
    - Args
        - seq: A list consisting of Scopul musical element types (Rest, Note and Chord objects)
    - Returns 
        - a list of Note object
    - Raises
        - **InvalidMusicalElementError**: if the list consists of non Scopul Musical Element types (Rests, Notes, Chords)
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting sequence
        sequence = random_part.sequence

        # Extracting the notes
        notes = random_part.get_notes(sequence)
        print(notes)

        # Sample output
        >>> [<Sequence.Note object at 0x000001446B59CF50>, <Sequence.Note object at 0x0000014466563890>, <Sequence.Note object at 0x000001446B69C310>]
        ```
    
    - Works well with `get_measure()` method. As an example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting a certain measure
        sequence = random_part.get_measure(3)

        # Extracting the notes
        notes = random_part.get_notes(sequence)
        print(notes)

        # Sample output
        >>> [<Sequence.Note object at 0x000002290553CAD0>, <Sequence.Note object at 0x0000022905529E90>]
        ```
    

<br>

- `get_note_count(seq : list)`
    - Retrieves how many notes there are in a sequence
    - Args
        - seq: A list consisting of Scopul musical element types (Rest, Note and Chord objects)
    - Returns 
        - An int, representing the number of notes in the sequence

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting the sequence
        sequence = random_part.sequence

        # Getting the note count
        notes = random_part.get_note_count(sequence)
        print(notes)

        # Sample output
        >>> 4
        ```

    - Much like `get_notes`, it works well with `get_measure` method. For example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting a certain measure
        sequence = random_part.get_measure(3)

        # Getting note count
        notes = random_part.get_note_count(sequence)
        print(notes)

        # Sample output
        >>> 2
        ```
<br>

- `get_rests(seq : list)`
    - Retrieves all the [Rest](rest.html) objects in the current part
    - Args
        - seq: A list consisting of Scopul musical element types (Rest, Note and Chord objects)
    - Returns 
        - a list of Rest object
    - Raises
        - **InvalidMusicalElementError**: if the list consists of non Scopul Musical Element types (Rests, Notes, Chords)
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting sequence
        sequence = random_part.sequence

        # Extracting the rests
        rests = random_part.get_rests(sequence)
        print(rests)

        # Sample output
        >>> [<Sequence.Rest object at 0x000001446B59CF50>, <Sequence.Rest object at 0x0000014466563890>, <Sequence.Rest object at 0x000001446B69C310>]
        ```
    
    - Works well with `get_measure()` method. As an example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting a certain measure
        sequence = random_part.get_measure(3)

        # Extracting the rests
        rests = random_part.get_notes(sequence)
        print(rests)

        # Sample output
        >>> [<Sequence.Rest object at 0x000002290553CAD0>, <Sequence.Rest object at 0x0000022905529E90>]
        ```
    

<br>

- `get_rest_count(seq : list)`
    - Retrieves how many rests there are in a sequence
    - Args
        - seq: A list consisting of Scopul musical element types (Rest, Note and Chord objects)
    - Returns 
        - An int, representing the number of rests in the sequence

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting the sequence
        sequence = random_part.sequence

        # Getting the rest count
        rests = random_part.get_rest_count(sequence)
        print(rests)

        # Sample output
        >>> 1
        ```

    - Much like `get_rests`, it works well with `get_measure` method. For example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting a certain measure
        sequence = random_part.get_measure(3)

        # Getting rest count
        rests = random_part.get_rest_count(sequence)
        print(rests)

        # Sample output
        >>> 2
        ```

<br>

- `get_chords(seq : list)`
    - Retrieves all the [Chord](chord.html) objects in the current part
    - Args
        - seq: A list consisting of Scopul musical element types (Rest, Note and Chord objects)
    - Returns 
        - a list of Chord objects
    - Raises
        - **InvalidMusicalElementError**: if the list consists of non Scopul Musical Element types (Rests, Notes, Chords)
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting sequence
        sequence = random_part.sequence

        # Extracting the chords
        chords = random_part.get_chords(sequence)
        print(chords)

        # Sample output
        >>> [<Sequence.Chord object at 0x000001446B59CF50>, <Sequence.Chord object at 0x0000014466563890>, <Sequence.Chord object at 0x000001446B69C310>]
        ```
    
    - Works well with `get_measure()` method. As an example:
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting a certain measure
        sequence = random_part.get_measure(3)

        # Extracting the chords
        chords = random_part.get_chords(sequence)
        print(chords)

        # Sample output
        >>> [<Sequence.Chord object at 0x000002290553CAD0>, <Sequence.Chord object at 0x0000022905529E90>]
        ```
    

<br>

- `get_chord_count(seq : list)`
    - Retrieves how many chords there are in a sequence
    - Args
        - seq: A list consisting of Scopul musical element types (Rest, Note and Chord objects)
    - Returns 
        - An int, representing the number of chords in the sequence

    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting the sequence
        sequence = random_part.sequence

        # Getting the chord count
        chords = random_part.get_chord_count(sequence)
        print(chords)

        # Sample output
        >>> 4
        ```

    - Much like `get_chords`, it works well with `get_measure` method. For example:
        ```python
        from Scopul import Scopul
        
        scop = Scopul("test.mid")

        # Getting parts
        parts = scop.parts

        # Select a random part
        random_part = parts[0]

        # Getting a certain measure
        sequence = random_part.get_measure(3)

        # Getting chord count
        chords = random_part.get_note_count(sequence)
        print(chords)

        # Sample output
        >>> 2
        ```

