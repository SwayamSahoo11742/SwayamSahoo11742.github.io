# Installation and Configuration

## Installation

```cmd
$ pip install scopul
```
<br>

## Configuring MuseScore

To use the functions `generate_pdf()` and `generate_musicxml()`, you must download and specify the [MuseScore](https://musescore.org/en/download) executable file.

To configure MuseScore, run the `config_musescore()`

```python
from Scopul import Scopul, config_musescore

config_musescore("path/to/MuseScore.exe")
scop = Scopul("test.mid")

scop.generate_pdf("output.pdf")
```


