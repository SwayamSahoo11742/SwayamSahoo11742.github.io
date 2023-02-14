# TimeSignature

## Overview

TimeSignature is a class to to fetch time signature info from a <a href="scopul.mid">Scopul</a> object. It has 4 properties: `ratio`, `count`, `denominator`, `numerator`, and one method: `list()`.

Here's an example of how to fetch a TimeSignature object of a Scopul object:
```python
scop = Scopul("test.mid")
time_signature = scop.time_sig
print(time_signature)

# Sample output
>>> <TimeSignature.TimeSignature object at 0x0000029C5E1A5610>
```
<br>
## Properties
- `ratio`
    - Fetches the initial time signature as you would normally see it on sheet music
    - Returns
        - A string, Ex: `3/4`
    
    - Example
        ```python
        scop = Scopul("test.mid")
        time_signature = scop.time_sig
        print(time_signature.ratio)

        # Sample output
        >>> "6/8"
        ```
<br>

- `denominator`
    - Fetches the denominator of the initial tempo
    - Returns
        - An int, EX: `4`
    
    - Example
    ```python
    scop = Scopul("test.mid")
    time_signature = scop.time_sig
    print(time_signature.denominator)

    # Sample output
    >>> 4
    ```
<br>

- `numerator`
    - Fetches the numerator of the initial tempo
    - Returns
        - An int, EX: `4`
    
    - Example
    ```python
    scop = Scopul("test.mid")
    time_signature = scop.time_sig
    print(time_signature.numerator)

    # Sample output
    >>> 2    
    ```
<br>

- `count`
    - Fetches the number of times time signature changes have occured
    - Returns
        - An int, EX: `12`
    - Example
        ```python
        scop = Scopul("test.mid")
        time_signature = scop.time_sig
        print(time_signature.count)

        # Sample output
        >>> 12
        ```
<br>

## Methods
 - `list`
    - Fetches a list of all the time signature changes in a piece, with measure numbers
    - Returns
        - A dict, with `measure` and `ratio` keys. For example;
            ```python
            [{'ratio': '6/8', 'measure': 1}, {'ratio': '6/8', 'measure': 1}]
            ```

    - Example:
        ```python
        scop = Scopul("test.mid")
        time_signature = scop.time_sig
        print(time_signature.list())

        # Sample output
        >>> [{'ratio': '4/4', 'measure': 1}, {'ratio': '2/4', 'measure': 44}]
        ```






