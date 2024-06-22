# yt-dlp-gui-builder

## Project Request for AI: Building YT-DLP GUI

**Introduction:**

I need to build a graphical user interface (GUI) application called "YT-DLP GUI" for downloading and converting YouTube videos. This application should be based on the yt-dlp tool and designed to simplify the process for users. The goal is to create a user-friendly interface that supports batch downloading, automatic conversion, and instant video previews. The application should be optimized for Windows systems and packaged as an executable file (.exe) to be used on other devices without needing to install FFMPEG and yt-dlp.

### Detailed Description

**YT-DLP GUI: A User-Friendly Interface for Downloading and Converting YouTube Videos**

YT-DLP GUI is a graphical user interface (GUI) based on the yt-dlp tool, designed to simplify the process of downloading and converting YouTube videos. Below is a detailed description of its features, interface, and functionality:

#### 1. Features

- **Downloading and Converting:**
  - Supports downloading videos from YouTube.
  - Supports converting videos to various formats (e.g., MP3 and MP4).
- **Batch Download:**
  - Allows users to input multiple URLs for batch downloading.
- **Automatic Conversion:**
  - Automatically converts videos to the specified format after downloading.
- **Windows Compatibility:**
  - Optimized for Windows systems.
- **Executable File:**
  - Provides an executable file (.exe) for easy use on other devices without needing to install FFMPEG and yt-dlp.

#### 2. Interface Overview

- **URL Input Field (urlInput - QLineEdit):**
  - Users enter the YouTube video URLs they want to download. Supports entering multiple URLs (one per line).
- **Add URL Button (addUrlButton - QPushButton):**
  - Click to add the entered URL to the batch download URL display box.
- **Batch Download URL Display Box (urlListDisplay - QListWidget):**
  - Displays all added URLs, allowing users to review and manage the batch download URLs.
- **Format Selection Dropdown (formatComboBox - QComboBox):**
  - Users select the desired download format (e.g., MP3 or MP4).
- **Download Button (downloadButton - QPushButton):**
  - Initiates the download process.
- **Progress Bar (progressBar - QProgressBar):**
  - Shows real-time download progress.
- **Status Label (statusLabel - QLabel):**
  - Displays the download status (e.g., "Downloading" or "Download Complete").
- **Preview Label (previewLabel - QLabel):**
  - Displays the video thumbnail for user confirmation.

#### 3. Functional Implementation Details

**3.1 Batch Download**

- **Input Multiple URLs:**
  - Users enter multiple YouTube video URLs in the URL input field (one per line), then click the Add URL button to add them to the batch download URL display box.
- **Batch Download URL Display Box:**
  - All added URLs are displayed in the batch download URL display box, allowing users to review and manage these URLs.
- **Download Process:**
  - After clicking the Download button, the application will sequentially download all videos.
  - The download progress of each video is shown in the progress bar, and the status label updates to "Downloading".
- **Download Completion:**
  - Once all videos are downloaded, the status label shows "All Downloads Complete".

**3.2 Automatic Conversion**

- **Format Selection and Automatic Conversion:**
  - Users select the download format and check the "Automatic Conversion" option.
- **Conversion Process:**
  - After the video is downloaded, the application automatically calls the FFMPEG tool for conversion.
  - The status label updates to "Converting".
- **Conversion Completion:**
  - Once the conversion is complete, the status label updates to "Conversion Complete".

**3.3 Instant Preview and Playback**

- **URL Detection and Thumbnail Display:**
  - When users enter a valid URL and press confirm, the application uses yt-dlp to fetch video information, including the thumbnail URL.
- **Thumbnail Display:**
  - The thumbnail is displayed in the preview label on the interface, allowing users to confirm the entered URL is correct.

#### 4. User Interaction Workflow

**4.1 Enter Video URLs**

- Users enter multiple YouTube video URLs, then click the Add URL button to add them to the batch download URL display box.
- The preview label displays the corresponding video thumbnails for user confirmation.

**4.2 Select Download Format**

- Users select MP3 or MP4 format and can choose whether to enable automatic conversion.

**4.3 Start Download**

- Click the Download button to initiate batch download and conversion.
- The progress bar and status label provide real-time updates.

**4.4 Download and Conversion Completion**

- The status label displays "Download Complete" or "Conversion Complete".

#### 5. Interface Button Descriptions

- **URL Input Field (urlInput - QLineEdit):**
  - Input area for entering YouTube video URLs to be downloaded. Supports entering multiple URLs (one per line).
- **Add URL Button (addUrlButton - QPushButton):**
  - Click to add the entered URL to the batch download URL display box.
- **Batch Download URL Display Box (urlListDisplay - QListWidget):**
  - Displays all added URLs, allowing users to review and manage batch download URLs.
- **Format Selection Dropdown (formatComboBox - QComboBox):**
  - Dropdown menu allowing users to select the download format. Options include MP3, MP4, etc.
- **Download Button (downloadButton - QPushButton):**
  - Click to start the download process. The button reads the entered URLs and selected format, then initiates the download process.
- **Progress Bar (progressBar - QProgressBar):**
  - Shows the real-time download progress. As the download progresses, the progress bar moves from 0% to 100%.
- **Status Label (statusLabel - QLabel):**
  - Displays the current download status, such as "Downloading", "Download Complete", or "Converting".
- **Preview Label (previewLabel - QLabel):**
  - Displays the video thumbnail. When users enter a valid URL and the video information is fetched, the corresponding thumbnail is displayed for confirmation.

#### 6. Packaging into an Executable (.exe)

- **Packaging Tools:**
  - Use tools like PyInstaller or cx_Freeze to package the application into an executable file.
- **Include FFMPEG and yt-dlp:**
  - During the packaging process, include the FFMPEG and yt-dlp tools in the executable, allowing it to be used on other devices without needing to install these tools.

#### 7. Final Steps: Splitting and Compressing Files

- After completing the project, split the final files into several parts and compress them. Allow the user to download one part before starting to compress the next part.

### Instructions to AI:

1. **Code and Files Only:** Write the complete code for the YT-DLP GUI project as described above. Do not explain the code or files.
2. **Save to Directory:** Save all necessary files, including the main script, dependencies, and any additional resources, to the directory `/mnt/data`.
3. **Packaging:** Use PyInstaller or cx_Freeze to package the application into an executable (.exe) file, including FFMPEG and yt-dlp.
4. **Splitting and Compressing:** Split the final files into several parts and compress them. Allow the user to download one part before starting to compress the next part.
5. **Provide Download Links:** Provide links for downloading the compressed parts.
"""

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/yt-dlp-gui-builder.git
cd yt-dlp-gui-builder
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
