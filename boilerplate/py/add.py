import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', '..', 'lib'))
import lib

a = lib.get_input_n()[0]
b = lib.get_input_n()[1]
# Solution
lib.submit()
