# Scopul Class

## Overview
The Scopul class is a class for creating, analyzing, and generating MIDI files. It can read MIDI files, extract information such as tempo, time signature, and parts, and generate pdf and musicxml files. The class provides properties and methods to perform these tasks, making it a versatile tool for working with music files.

To instanciate a Scopul class, do the following:
```python
from Scopul import Scopul

scop = Scopul("test.mid")
```

## Class Properties
- `tempo_list`
  - The tempo property returns a list of [Tempo](tempo.md) object.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    tempo_list = scopul_object.tempo_list
    print(tempo_object)

    # Sample output
    >>> [<Scopul.Tempo.Tempo object at 0x000001A298C24ED0>, <Scopul.Tempo.Tempo object at 0x000001A298BF0590>]
    ```
<br>

- `time_sig_list`
  - The time_sig property returns a list of [TimeSignature](timesig.md), each representing an occurance of a time sigature occurrence.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    time_sig_object = scopul_object.time_sig_list
    print(time_sig_object)

    # Sample output
    >>> [<TimeSignature.TimeSignature object at 0x0000019AB0395610>,<TimeSignature.TimeSignature object at 0x0000019AB0395ACF0>]
    ```
<br>

- `parts`
  - The parts property returns a list of [Part](part.md) objects in the MIDI file.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    part_list = scopul_object.parts
    print(part_list)

    # Sample output
    >>> [<Sequence.Part object at 0x000001E94FFCB9D0>, <Sequence.Part object at 0x000001E9501EBF50>]
    ```

<br>

- `path`
  - The audio property returns the audio midi file.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    midi_file = scopul_object.path
    print(midi_file)

    # Sample Output
    >>> "test.mid"
    ```
  - The path property can also be set, which will reconstruct the object to change accordingly to a new midi.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    scopul_object.path = "test2.mid"
    print(scopul_object.path)

    >>> "test2.mid"
    ```
  
  <br>

- `key`
  - Returns the key of the piece
  - Example
    ```python
    from Scopul import Scopul

    scop = Scopul("test.mid")
    print(scop.key)

    # Sample output
    >>> "D minor"
    ```

- `music21`
  - the music21 property returns the [Music21 Stream Object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_06_stream2.html) for the MIDI file

  - Example
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    print(scopul_object.music21)

    # Sample output
    >>> <music21.stream.Score 0x215845a3010>
    ```


<br>

## Methods
- `get_audio_length()`
  - The `get_audio_length()` method returns the length of the audio in seconds.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    audio_length = scopul_object.get_audio_length()
    print(audio_length)

    # Sample output
    >>> 77.62499999999935
    ```
  
  <br>

- `generate_pdf(fp="", overwrite=False, title="scop")`
  - The `generate_pdf()` method generates a pdf of the midi. It creates a pdf by turning it into musicxml then to pdf.
  - ****Note** - To use this, you must have MuseScore configured, to configure MuseScore, go the configuration part of [Installation and Configuration](install.md)
  - Args:
    - `title`: a str that represents the title of the file
    - `fp`:` a str that represents the file path as to where to save the pdf. Default is '', which will save to the current working directory
    - `overwrite`: a boolean, indicates whether to overwrite files or not
  - Returns:
    - `None`, just generates a pdf in the path specified with the name specified
  - Raises:
    - **FileExistsError**: if overwrite is False and there is a file at the same path
    - **InvalidFileFormatError**: if given a non .pdf file for output
  - Example:
    ```python
    from Scopul import Scopul, config_musescore

    # Config Path
    config_musescore("path/to/MuseScore.exe")

    scopul_object = Scopul("test.mid")
    scopul_object.generate_pdf(fp="path/to/pdf.pdf", overwrite=True, title="My Piece")
    ```
  
  <br>
- `generate_musicxml(fp="", overwrite=False, title="scop")`
  - The `generate_musicxml` method generates a musicxml of the midi file.
  - ****Note** - To use this, you muse have MuseScore configured, to configure MuseScore, go the configuration part of [Installation and Configuration](install.md)
  - Parameters
    - `title`: a string that represents the title of the file
    - `fp`: a string that represents the file path as to where to save the musicxml. Default is '', which will save to the current working directory
    - `overwrite`: a boolean, indicates whether to overwrite files or not
  - Returns
    - This method returns `None`, it just generates a musicxml in the path specified with the name specified.
  - Raises:
    - **FileExistsError** if overwrite is False and there is a file at the same path
    - **InvalidFileFormatError**: if given a non .xml file for output
  - Example:
    ```python
    from Scopul import Scopul, config_musescore

    # Config Path
    config_musescore("path/to/bin")

    scopul_object = Scopul("test.mid")
    scopul_object.generate_musicxml(fp="path/to/xml.xml", overwrite=True, title="My Piece")
    ```

  <br>

  - For Example:
      ```python
      from Scopul import Scopul, Note

      scopul_object = Scopul("test.mid")

      scopul_object.add_note(note=Rest(length=0.5), part=scopul_object.parts[1], measure_number=5)
      ```
  <br>

- `save_midi(self, output, fp="", overwrite=False)`
  - Converts the Scopul object to a midi file
  - Args
    - `output`: the filename for your output file, str
    - `fp`: The file path to the directory you want to save to ("" for current directory)
    - `overwrite`: boolean value, determines whether to overwrite the file if it already exists
  - Returns
    - `None`
  - Raises
    - **InvalidFileFormatError**: If the output file has an invalid file extension.
    - **FileExistsError**: If the output file already exists and overwrite is set to False. 
  - For example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")

    # Some alteration of the midi file
    scopul_object.add_tempo(300, scopul_object.parts[0], measure_number=8)

    # Saving the altered version
    scopul_object.save_midi("output.mid", fp="path/to/folder", overwrite=True)
    ```

<br>

- `append_part(self, part: Part)`
  - Appends a Scopul Part to the object

  - Args:
    - part: a Part object
        
  - Returns:
      - None

  Example:
    ```python
    from Scopul import Scopul, Part, Note

    scop = Scpul("test.mid")
    note = Note("C3", length=1.5)
    part = Part([note])

    scop.append_part(part)
    ```
<br>
## External useful functions 

- `midi_tempo2bpm(tempo : int | float)`
  Converts a midi tempo value to bpm


  - Parameters
    - `tempo`: an int, the midi tempo value to be converted


  - Returns
    - A float or a list of floats, depending on the input
      - If `tempo` is an int, returns a float
      - If `tempo` is a list, returns a list of floats


  - Example
    ```python
    from Scopul import midi_tempo2bpm

    # int input
    print(midi_tempo2bpm(10000))

    # Sample output
    >>> 100.0


    # list input
    print(midi_tempo2bpm([10000, 24566, 3444]))

    # Sample output
    >>> [6000.0, 2442.4000651306683, 17421.602787456446]
    ```

<br>

- `bpm2midi_tempo(tempo : int | list)`


  Converts a bpm value to midi tempo


  - Parameters


    - `tempo` (int or list): An int value representing the bpm to be converted to midi tempo.


  - Returns


    - `float` or `list`: Depending on the input, returns either a float value representing the converted midi tempo or a list of float values representing the midi tempo values for each bpm value in the list.


  - Example
    ```python
    from Scopul import bpm2midi_tempo
    
    # int input
    print(bpm2midi_tempo(108))

    # Sample output
    >>> 555556

    # Sample output
    >>> 100.0


    # list input
    print(bpm2midi_tempo([108, 60, 200]))

    # Sample output
    >>> [555556, 1000000, 300000]
    ```
