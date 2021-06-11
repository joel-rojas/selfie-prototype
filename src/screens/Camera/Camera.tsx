import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Camera as ExpoCamera } from "expo-camera";
import { Icon } from "react-native-elements";

import { useTakePhoto } from "@hooks";
import { defaultStyles } from "@styles";

const Camera: React.FC<{}> = () => {
  const cameraRef = React.useRef<ExpoCamera | null>(null);
  const [isCameraReady, setIsCameraReady] = React.useState<boolean>(false);

  const [takePhoto] = useTakePhoto();

  const onCameraReady = React.useCallback(() => {
    setIsCameraReady(true);
  }, []);

  const handleTakePhoto = () => {
    takePhoto(cameraRef.current!, isCameraReady);
  };

  return (
    <View style={styles.container}>
      <ExpoCamera
        ref={(r) => (cameraRef.current = r)}
        style={styles.cameraContainer}
        type={ExpoCamera.Constants.Type.front}
        onCameraReady={onCameraReady}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleTakePhoto}
            disabled={!isCameraReady}
          >
            <Icon
              type="font-awesome-5"
              name="record-vinyl"
              size={100}
              color="#ffffff"
            ></Icon>
          </TouchableOpacity>
        </View>
      </ExpoCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 50,
  },
  cameraButton: {
    height: 100,
    width: 100,
  },
  warningContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  warningTitle: {
    ...defaultStyles.text,
  },
});

export default Camera;
