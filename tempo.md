# Tempo

## Overview
Tempo is a class to fetch the tempo and tempo changes in a [Scopul]("scopul.md") object. It provides two properties bpm_list and midi_tempo_list which return the tempo information in bpm (beats per minute) and midi tempo format respectively.


Here is an example of how to acess the Tempo class for a Scopul object:

```python
from Scopul import Scopul

scop = Scopul("test.mid")
tempo = scop.tempo
print(tempo)

# Sample output
>>> <Tempo.Tempo object at 0x000001B737BBFC10>
```
<br>

## Properties
- `bpm_list`
    - Fetches the tempo list in bpm with measure numbers

    - Returns:
        - A list of dict objects with 2 keys: "tempo" and "measure". For example:

            ```python
            [{"tempo":36, "measure": 1},{"tempo":5, "measure": 56}]
            ```
    - Example
        ```
        from Scopul import Scopul

        scopul_object = Scopul("test.mid")
        tempo = scopul_objecy.tempo
        print(tempo.bpm_list)

        # Sample output
        >>> [{'tempo': 200.0, 'measure': 1}, {'tempo': 108.0, 'measure': 55}]
        ```
        <br>
- `midi_tempo_list`
    - Fetches the tempo list in midi tempo with measure numbers
        - midi tempo is microseconds per beat

    - Returns:
        - A list of dict objects with 2 keys: "tempo" and "measure". For example:

            ```python
            [{"tempo":100000, "measure": 1},{"tempo":56646, "measure": 44}]
            ```
    - Example
        ```python
        from Scopul import Scopul
        
        scopul_object = Scopul("test.mid")
        tempo = scopul_objecy.tempo
        print(tempo.bpm_list)

        # Sample output
        >>> [{'tempo': 389610, 'measure': 1},{'tempo': 566636, 'measure': 176}]
        ```