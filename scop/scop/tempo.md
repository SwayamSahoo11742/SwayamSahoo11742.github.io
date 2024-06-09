# Tempo

## Overview
Tempo is a class to fetch the tempo and tempo changes in a [Scopul]("scopul.md") object. It provides two properties bpm_list and midi_tempo_list which return the tempo information in bpm (beats per minute) and midi tempo format respectively.


Here is an example of how to acess the Tempo class for a Scopul object:

```python
from Scopul import Scopul

scop = Scopul("test.mid")
tempo = scop.tempo_list[0]
print(tempo)

# Sample output
>>> <Tempo.Tempo object at 0x000001B737BBFC10>
```
<br>

## Creating a Tempo object
#### `Tempo(self, bpm: int, measure=None)`


You can create your own note class, which you may use to append to the existing MIDI or use for other purposes

##### Args
- `bpm` : the tempo as an int in bpm (Beats Per Minute) 
    - Ex. `64`, which is middle C
- `measure`: The measure number of the tempo mark



To make create a Tempo class:

```python
from Scopul import Tempo

my_note = Tempo(bpm=122, measure=5)
```
<br>

## Properties
- `bpm`
    - Fetches the tempo in bpm
        - bpm is beats per minute

    - Returns:
        - An int, representing the bpm. Ex. `122`

    - Example
        ```python
        from Scopul import Scopul
        
        scopul_object = Scopul("test.mid")
        tempo = scopul_object.tempo_list[0]
        
        print(tempo.bpm)

        # Sample output
        >>> 60
        ```
        <br>
- `midi_tempo`
    - Fetches the tempo in midi tempo
        - midi tempo is microseconds per beat

    - Returns:
        - An int, representing the midi tempo. Ex. `50000`

    - Example
        ```python
        from Scopul import Scopul
        
        scopul_object = Scopul("test.mid")
        tempo = scopul_object.tempo_list[0]

        print(tempo.midi_tempo)

        # Sample output
        >>> 1000000
        ```

<br>

- `measure`
    - Gets the measure in which this tempo mark appeared in
    - Returns
        - an int, representing the measure number. For example: `5`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting list of tempos
        tempo_list = scop.tempo_list 
        rendom_tempo = tempo_list[0] # Sample index

        print(random_tempo.measure)

        # Sample output
        >>> 1
        ```

<br>

- `music21`
  - the music21 property returns the [Music21 Object](https://web.mit.edu/music21/doc/moduleReference/moduleTempo.html) for the Tempo object

  - Example
    ```python
    from music21 import note
    from Scopul import Scopul, Tempo

    tempo_mark = Tempo(bpm=300)
    print(tempo_mark.music21)

    # Sample output
    >>> <music21.tempo.MetronomeMark Quarter=300>
    ```