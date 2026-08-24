import fitz
import os
import shutil

folder_path = r"C:\Users\daniy\OneDrive - King's College London\Documents\PhD\Digital Corpus\1952-1977 - Contestation\Elijah Muhammad\Official_Publications"
ocr_folder = os.path.join(folder_path, "Needs_OCR")

if not os.path.exists(ocr_folder):
    os.makedirs(ocr_folder)

for filename in os.listdir(folder_path):
    if filename.lower().endswith(".pdf"):
        file_path = os.path.join(folder_path, filename)
        try:
            doc = fitz.open(file_path)
            has_text = any(page.get_text().strip() for page in doc)
            doc.close()

            if not has_text:
                print(f"Moving to OCR folder: {filename}")
                shutil.move(file_path, os.path.join(ocr_folder, filename))
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print("\nDone! All non-searchable files are now in the 'Needs_OCR' subfolder.")
