import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native';

<View style={styles.container}>
  <Button
    title="Show Dialog"
    onPress={() => {
      this.setState({ visible: true });
    }}
  />
  <Dialog
    visible={this.state.visible}
    onTouchOutside={() => {
      this.setState({ visible: false });
    }}
  >
    <DialogContent>{'asdsad'}</DialogContent>
  </Dialog>
</View>;
