# main.py

import cv2
import mediapipe as mp
from dataset.data import detect_letter_and_number

def main():
    # Inisialisasi MediaPipe untuk deteksi tangan
    mp_drawing = mp.solutions.drawing_utils
    mp_hands = mp.solutions.hands

    # Inisialisasi video capture
    cap = cv2.VideoCapture(0)

    with mp_hands.Hands(
        max_num_hands=1,  # Deteksi satu tangan saja
        min_detection_confidence=0.7,
        min_tracking_confidence=0.5
    ) as hands:
        while cap.isOpened():
            success, image = cap.read()
            if not success:
                print("Error: Tidak dapat membaca dari kamera.")
                break

            # Flip gambar horizontal untuk pengalaman yang lebih natural
            image = cv2.flip(image, 1)

            # Konversi BGR ke RGB
            image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
            image_rgb.flags.writeable = False  # Mengurangi penggunaan memori

            # Proses gambar untuk mendeteksi tangan
            results = hands.process(image_rgb)

            # Mengembalikan ke writable
            image_rgb.flags.writeable = True
            image = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2BGR)

            # Menggambar tangan dan mendeteksi huruf
            if results.multi_hand_landmarks:
                for hand_landmarks in results.multi_hand_landmarks:
                    # Menggambar landmark tangan
                    mp_drawing.draw_landmarks(
                        image, hand_landmarks, mp_hands.HAND_CONNECTIONS)

                    # Hitung kombinasi jari yang terangkat
                    fingers = []

                    # Menentukan posisi jari (indeks jari)
                    # Asumsi: 0 - ibu jari, 1 - telunjuk, 2 - jari tengah, 3 - manis, 4 - kelingking
                    # Anda dapat menyesuaikan logika ini sesuai dengan kebutuhan
                    for i in range(5):
                        tip_id = mp_hands.HandLandmark(i * 4 + 4).value
                        pip_id = mp_hands.HandLandmark(i * 4 + 2).value
                        if hand_landmarks.landmark[tip_id].y < hand_landmarks.landmark[pip_id].y:
                            fingers.append(1)  # Jari terangkat
                        else:
                            fingers.append(0)  # Jari tidak terangkat

                    # Deteksi huruf atau angka
                    letter, finger_data = detect_letter_and_number(fingers)
                    if letter:
                        # Tampilkan huruf
                        cv2.putText(image, f'Huruf: {letter}', (10, 30),
                                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2, cv2.LINE_AA)
                        
                        # Tampilkan data jari
                        finger_text = 'Jari: ' + ' '.join(map(str, finger_data))
                        cv2.putText(image, finger_text, (10, 70),
                                    cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 0, 0), 2, cv2.LINE_AA)

            # Tampilkan hasil
            cv2.imshow('Deteksi Bahasa Isyarat', image)

            # Keluar jika menekan 'q'
            if cv2.waitKey(5) & 0xFF == ord('q'):
                break

    # Lepaskan video capture dan tutup jendela
    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
