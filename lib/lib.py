import sys


def get_input():
    return sys.argv[1:]


def get_input_n():
    return [int(v) for v in sys.argv[1:]]


submit = print


def dbg(*args):
    print(*args, file=sys.stderr)