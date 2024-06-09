# ChordProgression Class

## Overview

To acess a ChordProgression class, do the following:
```python
from Scopul import Scopul

scop = Scopul("test.mid")
part = scop.parts[0]
chords = part.get_chord_progression()
```

## Class Properties
- `length`
  - The length property returns the number of elements in the progression.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()

    print(progression.length)

    # Sample output
    >>> 5
    ```
<br>

- `roman_chords`
  - The roman_chords property returns a list of chords in roman notation.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()

    print(progression.roman_chords)

    # Sample output
    >>> ["iob532", "IV32"]
    ```
<br>

- `chords`
  - The chords property returns a list of the chords in the progression in normal english.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()

    print(progression.chords)

    # Sample output
    >>> ["G major", "D minor"]
    ```

<br>

- `key`
  - The key property returns the key of the progression.

  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()

    print(progression.key)

    # Sample output
    >>> "D minor"
    ```
  
  <br>

- `music21`
  - the music21 property returns the [Music21 Stream Object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_06_stream2.html) for the ChordProgression

  - Example
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()

    print(progression.music21)

    # Sample output
    >>> <music21.stream.iterator.RecursiveIterator for Part:0x1cf775058d0 @:3>
    ```


<br>

## Methods
- `transpose(interval: str | int)`
  - Changes the chords to the specified interval/key
  - Args:
    - interval: an int or a str, depending on your needs
  - Returns:
    - None
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()

    progression.transpose(2)
    progression.transpose("m3")
    ```
  
  <br>

- `append(self, chord: Chord)`
  - Appends the specified chord to the progression
  - Args:
    - `chord`: a Chord object
  - Returns:
    - `None`
  - Example:
    ```python
    from Scopul import Scopul, Chord, Note

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()
    chord = Chord([
        Note(name="C3", length=1.5),
        Note(name="D3", length=1.5),
        Note(name="E4", length=1.5)
        ])
    
    progression.append(chord)
    ```
  
  <br>
- `insert(self, index: int,  chord: Chord)`
  - inserts the specified chord to the progression at the specified index
  - Args:
    - `chord`: a Chord object
    - `index`: an int
  - Returns:
    - `None`
  - Example:
    ```python
    from Scopul import Scopul, Chord, Note

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()
    chord = Chord([
        Note(name="C3", length=1.5),
        Note(name="D3", length=1.5),
        Note(name="E4", length=1.5)
        ])
    
    progression.insert(3, chord)
    ```

  <br>

- `append(self, chord: Chord)`
  - Deletes the chord at the specified index
  - Args:
    - `index`: an int
  - Returns:
    - `None`
  - Example:
    ```python
    from Scopul import Scopul, Chord, Note

    scopul_object = Scopul("test.mid")
    part = scopul_object.parts[0]
    progression = part.get_chord_progression()
    chord = Chord([
        Note(name="C3", length=1.5),
        Note(name="D3", length=1.5),
        Note(name="E4", length=1.5)
        ])
    
    progression.delete(0)
    ```
  
