# Deprecated
### The following functions are deprecated and no longer recommended to be used


- `Scopul.add_tempo(self, bpm_tempo: int, part, measure_number: int = 1)`
  - Adds a metronome mark at the specified measure in a part object.

  - Deprecation reason: It has been replaced by `Part.insert`, which allows you to insert any musical element
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

  - Deprecation reason: It has been replaced by `Part.insert`, which allows you to insert any musical element 
<br>

<br>

- `Scopul.add_TimeSignature(self, time_sig: str, part, measure_number: int = 1)`

  - Adds a time signature at the specified measure in a part object.
  - Deprecation reason: It has been replaced by `Part.insert`, which allows you to insert any musical element
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

<br>

- `Scopul.add_note(self, time_sig: str, part, measure_number: int = 1, position=0)`
  - Adds a note at the specified measure and position
  - Deprecation reason: It has been replaced by `Part.insert`, which allows you to insert any musical element
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