# Scopul Class
The Scopul class is a class for manipulating and generating music files.


## Class Properties
- `tempo`
  - The tempo property returns a <a href="tempo.md">Tempo</a> object.
  - Example:
    ```python
    scopul_object = Scopul("test.mid")
    tempo_object = scopul_object.tempo
    print(tempo_object)

    # Sample output
    >>> <Tempo.Tempo object at 0x000001B737BBFC10>
    ```
<br>

- `time_sig`
  - The time_sig property returns a <a href="timesig.md">TimeSignature</a> object.
  - Example:
    ```python
    scopul_object = Scopul("test.mid")
    time_sig_object = scopul_object.time_sig
    print(time_sig_object)

    # Sample output
    >>> <TimeSignature.TimeSignature object at 0x0000019AB0395610>
    ```
<br>

- `parts`
  - The parts property returns a list of <a href="part.md">Part</a> objects.
  - Example:
    ```python
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
    scopul_object = Scopul("test.mid")
    midi_file = scopul_object.audio
    print(midi_file)

    # Sample Output
    >>> "test.mid"
    ```
  - The audio property can also be set, which will reconstruct the object to change accordingly to a new midi.
  - Example:
    ```python
    scopul_object = Scopul("test.mid")
    scopul_object.audio = "test2.mid"
    print(scopul_object.audio)

    >>> "test2.mid"
    ```
  
  <br>

- `midi`
  - the midi property returns a [Music21 Stream Object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_06_stream2.html)

  - Example
    ```python
    scopul_object = Scopul("test.mid")
    print(scopul_object.midi)

    # Sample output
    >>> <music21.stream.Score 0x215845a3010>
    ```

<br>

## Methods
- `get_audio_lenght()`
  - The `get_audio_lenght()` method returns the length of the audio in seconds.
  - Example:
    ```python
    scopul_object = Scopul("test.mid")
    audio_length = scopul_object.get_audio_lenght()
    print(audio_lenght)

    # Sample output
    >>> 77.62499999999935
    ```
  
  <br>

- `generate_pdf(output, fp="", overwrite=False )`
  - The `generate_pdf()` method generates a pdf of the midi. It creates a pdf by turning it into musicxml then to pdf.
  - Args:
    - `output`: a str that represents the name of the file
    - `fp`:` a str that represents the file path as to where to save the pdf. Default is '', which will save to the current working directory
    - `overwrite`: a boolean, indicates whether to overwrite files or not
  - Returns:
    - `None`, just generates a pdf in the path specified with the name specified
  - Raises:
    - **FileExistsError**: if overwrite is False and there is a file at the same path
    - **InvalidFileFormatError**: if given a non .pdf file for output
  - Example:
    ```python
    scopul_object = Scopul("test.mid")
    scopul_object.generate_pdf("example.pdf", fp="path/to/pdf/", overwrite=True)
    ```
  
  <br>
- `generate_musicxml(output, fp="", overwrite=False)`
  - The `generate_musicxml` method generates a musicxml of the midi file.
  - Parameters
    - `output`: a string that represents the name of the file
    - `fp`: a string that represents the file path as to where to save the musicxml. Default is '', which will save to the current working directory
    - `overwrite`: a boolean, indicates whether to overwrite files or not
  - Returns
    - This method returns `None`, it just generates a musicxml in the path specified with the name specified.
  - Raises:
    - **FileExistsError** if overwrite is False and there is a file at the same path
    - **InvalidFileFormatError**: if given a non .xml file for output
  - Example:
    ```python
    scopul_object = Scopul("test.mid")
    scopul_object.generate_musicxml("example.pdf", fp="path/to/xml/", overwrite=True)
    ```
   
<br><br>

## Class Methods 

- `Scopul.midi_tempo2bpm(tempo : int | float)`
  Converts a midi tempo value to bpm


  - Parameters
    - `tempo`: an int, the midi tempo value to be converted


  - Returns
    - A float or a list of floats, depending on the input
      - If `tempo` is an int, returns a float
      - If `tempo` is a list, returns a list of floats


  - Example
    ```python
    # int input
    print(Scopul.midi_tempo2bpm(10000))

    # Sample output
    >>> 100.0


    # list input
    print(Scopul.midi_tempo2bpm([10000, 24566, 3444]))

    # Sample output
    >>> [6000.0, 2442.4000651306683, 17421.602787456446]
    ```

<br>

- `Scopul.bpm2midi_tempo(tempo : int | list)`


  Converts a bpm value to midi tempo


  - Parameters


    - `tempo` (int or list): An int value representing the bpm to be converted to midi tempo.


  - Returns


    - `float` or `list`: Depending on the input, returns either a float value representing the converted midi tempo or a list of float values representing the midi tempo values for each bpm value in the list.


  - Example
    ```python
    # int input
    print(Scopul.bpm2midi_tempo(108))

    # Sample output
    >>> 555556

    # Sample output
    >>> 100.0


    # list input
    print(Scopul.bpm2midi_tempo([108, 60, 200]))

    # Sample output
    >>> [555556, 1000000, 300000]
    ```
