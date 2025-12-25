# SotN-Colour-Picker
### A tool for tuning Joseph's Cloak colours in *Castlevania: Symphony of the Night*

The item "Joseph's Cloak" in *Castlevania: Symphony of the Night* (*SotN*) enables players to customzize the exterior and lining colours of Alucard's cloak. This customization is performed by changing red, green, and blue values in a range of 0 to 31. This tool takes a user-provided colour value (initially formatted as hex, internally), separates the RGB values, clamps each value within a range of 0 to 31, and floors each value to the nearest integer.

**DISCLAIMER:** Given the limitations of this system (scaling from eight-bit RGB to five-bit RGB), and the fact that I don't know exactly how SotN scales RGB values for Joseph's Cloak, you can expect a certain amount of inaccuracy with the outputs of this tool.

*Joseph's Cloak sprite icon (used for site favicon and included in repo) belongs to Konami.*