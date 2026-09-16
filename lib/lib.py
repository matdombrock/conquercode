import sys


def get_input() -> list[str]:
    return sys.argv[1:]


def get_input_n() -> list[int]:
    return [int(v) for v in sys.argv[1:]]


submit = print


def dbg(*args):
    print(*args, file=sys.stderr)
