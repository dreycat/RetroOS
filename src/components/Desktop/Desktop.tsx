import { Taskbar } from '../Taskbar';
import { AudioPlayerApp } from '../Apps/AudioPlayerApp';
import { ConsoleApp } from '../Apps/ConsoleApp';
import { ToDoApp } from '../Apps/ToDoApp';
import { MinesApp } from '../Apps/MinesApp';
import { SettingsApp } from '../Apps/SettingsApp';
import { DungeonApp } from '../Apps/DungeonApp';
import { ExplorerApp } from '../Apps/ExplorerApp';
import { ScreensaverApp } from '../Apps/ScreensaverApp';
import { NotepadApp } from '../Apps/NotepadApp';
import { VideoPlayerApp } from '../Apps/VideoPlayerApp';
import { ImageViewerApp } from '../Apps/ImageViewerApp';
import { ContextMenu } from '../ContextMenu';
import styles from './Desktop.module.css';

export const Desktop = () => (
  <div className={styles.main}>
    <Taskbar />
    <ExplorerApp />
    <AudioPlayerApp />
    <ConsoleApp />
    <ToDoApp />
    <MinesApp />
    <SettingsApp />
    <DungeonApp />
    <ScreensaverApp />
    <ContextMenu />
    <NotepadApp />
    <VideoPlayerApp />
    <ImageViewerApp />
  </div>
);
