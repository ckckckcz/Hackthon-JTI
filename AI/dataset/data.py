# data.py

def detect_letter_and_number(fingers):
    """
    Mengembalikan huruf, angka, atau frasa berdasarkan kombinasi jari yang terangkat.

    Args:
        fingers (list): List berisi 0 atau 1 yang mewakili status jari (0 = tidak terangkat, 1 = terangkat).

    Returns:
        tuple: (string yang terdeteksi, kombinasi jari)
    """
    # Huruf A-Z
    if fingers == [1, 0, 0, 0, 0]:   # A
        return 'A', fingers
    elif fingers == [1, 1, 0, 0, 0]:  # B
        return 'B', fingers
    elif fingers == [1, 1, 1, 0, 0]:  # C
        return 'C', fingers
    elif fingers == [1, 1, 1, 1, 0]:  # D
        return 'D', fingers
    elif fingers == [1, 1, 1, 1, 1]:  # E
        return 'E', fingers
    elif fingers == [0, 1, 0, 0, 0]:  # F
        return 'F', fingers
    elif fingers == [0, 1, 1, 0, 0]:  # G
        return 'G', fingers
    elif fingers == [0, 1, 1, 1, 0]:  # H
        return 'H', fingers
    elif fingers == [0, 1, 1, 1, 1]:  # I
        return 'I', fingers
    elif fingers == [0, 0, 1, 0, 0]:  # J
        return 'J', fingers
    elif fingers == [0, 0, 0, 1, 0]:  # K
        return 'K', fingers
    elif fingers == [0, 0, 0, 0, 1]:  # L
        return 'L', fingers
    elif fingers == [1, 0, 1, 0, 0]:  # M
        return 'M', fingers
    elif fingers == [1, 0, 1, 0, 1]:  # N
        return 'N', fingers
    elif fingers == [1, 1, 1, 0, 1]:  # O
        return 'O', fingers
    elif fingers == [1, 1, 0, 1, 0]:  # P
        return 'P', fingers
    elif fingers == [1, 0, 0, 1, 0]:  # Q
        return 'Q', fingers
    elif fingers == [1, 1, 0, 1, 1]:  # R
        return 'R', fingers
    elif fingers == [0, 1, 1, 0, 1]:  # S
        return 'S', fingers
    elif fingers == [0, 0, 1, 1, 0]:  # T
        return 'T', fingers
    elif fingers == [0, 1, 0, 1, 0]:  # U
        return 'U', fingers
    elif fingers == [0, 1, 0, 1, 1]:  # V
        return 'V', fingers
    elif fingers == [1, 0, 1, 1, 1]:  # W
        return 'W', fingers
    elif fingers == [1, 0, 1, 0, 0]:  # X
        return 'X', fingers
    elif fingers == [1, 1, 1, 0, 0]:  # Y
        return 'Y', fingers
    elif fingers == [1, 1, 1, 1, 1]:  # Z
        return 'Z', fingers
    
    # Angka 0-9
    elif fingers == [0, 0, 0, 0, 0]:  # 0
        return '0', fingers
    elif fingers == [1, 0, 0, 0, 0]:  # 1
        return '1', fingers
    elif fingers == [1, 1, 0, 0, 0]:  # 2
        return '2', fingers
    elif fingers == [1, 1, 1, 0, 0]:  # 3
        return '3', fingers
    elif fingers == [1, 1, 1, 1, 0]:  # 4
        return '4', fingers
    elif fingers == [1, 1, 1, 1, 1]:  # 5
        return '5', fingers
    elif fingers == [0, 1, 0, 0, 0]:  # 6
        return '6', fingers
    elif fingers == [0, 1, 1, 0, 0]:  # 7
        return '7', fingers
    elif fingers == [0, 1, 1, 1, 0]:  # 8
        return '8', fingers
    elif fingers == [0, 1, 1, 1, 1]:  # 9
        return '9', fingers
    
    # Tambahan frasa
    elif fingers == [0, 1, 0, 1, 1]:  # Terima Kasih
        return 'Terima Kasih', fingers
    elif fingers == [1, 1, 1, 0, 1]:  # Halo
        return 'Halo', fingers
    elif fingers == [1, 0, 1, 1, 1]:  # I Love You
        return 'I Love You', fingers
    
    return None, fingers
