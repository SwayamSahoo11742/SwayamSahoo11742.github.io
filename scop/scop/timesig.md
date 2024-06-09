
# TimeSignature

## Overview

TimeSignature is a class to to fetch time signature info from a [Scopul](scopul.md) object. It has 4 properties: `ratio`, `count`, `denominator`, `numerator`, and one method: `list()`.

Here's an example of how to fetch a TimeSignature object of a Scopul object:
```python
from Scopul import Scopul

scop = Scopul("test.mid")
time_signature = scop.time_sig_list[0]
print(time_signature)

# Sample output
>>> <TimeSignature.TimeSignature object at 0x0000029C5E1A5610>
```
<br>

## Creating a TimeSignature object
#### `TimeSignature(self, value: str, measure=None)`


You can create your own note class, which you may use to append to the existing MIDI or use for other purposes

##### Args
- `value` : the time signature as a string 
    - Ex. `"6/8"`, which is middle C
- `measure`: The measure number of the Time Signature



To make create a Tempo class:

```python
from Scopul import TimeSignature

my_note = TimeSIgnture(value="4/4", measure=28)
```
<br>

## Properties

- `ratio`
    - Fetches the time signature as you would normally see it on sheet music
    - Returns
        - A string, Ex: `3/4`
    
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")
        time_signature = scop.time_sig_list[0]
        print(time_signature.ratio)

        # Sample output
        >>> "6/8"
        ```
<br>

- `denominator`
    - Fetches the denominator of the time signature
    - Returns
        - An int, EX: `4`
    
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")
        time_signature = scop.time_sig_list[0]
        print(time_signature.denominator)

        # Sample output
        >>> 4
        ```
<br>

- `numerator`
    - Fetches the numerator of the time signature
    - Returns
        - An int, EX: `4`
    
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")
        time_signature = scop.time_sig_list[0]
        print(time_signature.numerator)

        # Sample output
        >>> 2    
        ```
<br>

- `measure`
    - Gets the measure in which this time signature appeared in
    - Returns
        - an int, representing the measure number. For example: `5`
    - Example
        ```python
        from Scopul import Scopul

        scop = Scopul("test.mid")

        # Getting list of tempos
        signature_list = scop.time_sig_list 
        rendom_signature = tempo_list[0] # Sample index

        print(random_signature.measure)

        # Sample output
        >>> 1
        ```
<br>


- `music21`
  - the music21 property returns the [Music21 Object](https://web.mit.edu/music21/doc/usersGuide/usersGuide_14_timeSignatures.htmll) for the Time Signature object

  - Example
    ```python
    from music21 import note
    from Scopul import Scopul, TimeSignature

    signature = TimeSignature(value="3/4")
    print(signature.music21)

    # Sample output
    >>> <music21.meter.TimeSignature 3/4>00>
    ```

