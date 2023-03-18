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

- `audio`
  - The audio property returns the audio midi file.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    midi_file = scopul_object.audio
    print(midi_file)

    # Sample Output
    >>> "test.mid"
    ```
  - The audio property can also be set, which will reconstruct the object to change accordingly to a new midi.
  - Example:
    ```python
    from Scopul import Scopul

    scopul_object = Scopul("test.mid")
    scopul_object.audio = "test2.mid"
    print(scopul_object.audio)

    >>> "test2.mid"
    ```
  
  <br>

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

- `generate_pdf(output, fp="", overwrite=False )`
  - The `generate_pdf()` method generates a pdf of the midi. It creates a pdf by turning it into musicxml then to pdf.
  - ****Note** - To use this, you must have MuseScore configured, to configure MuseScore, go the configuration part of [Installation and Configuration](install.md)
  - Args:
    - `output`: a str that represents the name of the file
    - `fp`:` a str that represents the file path as to where to save the pdf. Default is '', which will save to the current working directory
    - `overwrite`: a boolean, indicates whether to overwrite files or not
    -  `remove_defects`: a boolean. Removes any parts that stop it from generating the PDF (ie., corrupted part).
        - Will take longer than normal pdf generation
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
    scopul_object.generate_pdf("example.pdf", fp="path/to/pdf/", overwrite=True)
    ```
  
  <br>
- `generate_musicxml(output, fp="", overwrite=False, remove_defects=False)`
  - The `generate_musicxml` method generates a musicxml of the midi file.
  - ****Note** - To use this, you muse have MuseScore configured, to configure MuseScore, go the configuration part of [Installation and Configuration](install.md)
  - Parameters
    - `output`: a string that represents the name of the file
    - `fp`: a string that represents the file path as to where to save the musicxml. Default is '', which will save to the current working directory
    - `overwrite`: a boolean, indicates whether to overwrite files or not
    -  `remove_defects`: a boolean. Removes any parts that are problematic (ie., corrupted parts).
        - Will take longer than normal MusicXML generation
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
    scopul_object.generate_musicxml("example.pdf", fp="path/to/xml/", overwrite=True)
    ```
   
<br>

- `add_tempo(self, bpm_tempo: int, part, measure_number: int = 1)`
  - Adds a metronome mark at the specified measure in a part object.

  - Args:

    - `part`: A Scopul Part object representing a musical part. Ex. `Scopul.parts[0]`
    - `measure_number`: An integer specifying the measure number where the metronome mark should be - added.
    - `tempo`: A floating point number representing the tempo in beats per minute (BPM) for the   metronome mark.

  - Returns:

    - `None`.

  - Raises:

    - **TypeError**: If part is not a Scopul part object
    - **ValueError**: If measure_number is not a positive integer
    - **ValueError**: If tempo is not a positive number.
    - **MeasureNotFoundError**: If given measure does not exist
  <br>

  - For Example:
      ```python
      from Scopul import Scopul

      scopul_object = Scopul("test.mid")

      scopul_object.add_tempo(bpm_tempo=120, part=scopul_object.parts[1], measure_number=5)
      ```
    If a metronome mark already exists at the specified location, its tempo will be updated to the new tempo value
<br>


- `add_TimeSignature(self, time_sig: str, part, measure_number: int = 1)`
  - Adds a time signature at the specified measure in a part object.

  - Args:

    - `part`: A Scopul Part object representing a musical part. Ex. `Scopul.parts[0]`
    - `measure_number`: An integer specifying the measure number where the time signature should be added.
    - `time_sig`: A string representing thetime signature. Ex. `"3/4"`

  - Returns:

    - `None`.

  - Raises:

    - **TypeError**: If part is not a Scopul part object
    - **ValueError**: If measure_number is not a positive integer
    - **ValueError**: If time signature is not in right format.
    - **MeasureNotFoundError**: If given measure does not exist
  <br>

  - For Example:
      ```python
      from Scopul import Scopul

      scopul_object = Scopul("test.mid")

      scopul_object.add_TimeSignatureo(time_sig="3/4", part=scopul_object.parts[1], measure_number=5)
      ```
  If a time signature already exists at the specified location, it will be updated to the new  value
  <br>
- `add_note(self, time_sig: str, part, measure_number: int = 1, position=0)`
  - Adds a note at the specified measure and position

  - Args:

    - `part`: A Scopul Part object representing a musical part. Ex. `Scopul.parts[0]`
    - `measure_number`: An integer specifying the measure number where the note should be added
    - `position`: an integer, speciying where in the measure the note should go
    - `note`: A [Note](note.md), [Rest](rest.md) or [Chord](chord.md) object, that you want to add

  - Returns:

    - `None`.

  - Raises:

    - **TypeError**: If part is not a Scopul part object
    - **ValueError**: If measure_number is not a positive integer
    - **ValueError**: If note is not a Note, Rest or Chord object
    - **MeasureNotFoundError**: If given measure does not exist
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
