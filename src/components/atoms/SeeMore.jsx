import { Button, Text, View } from 'react-native'

const SeeMore = ({ onClick }) => {
  return (
    <View>
      <Button title="Text" onPress={onClick}>
        See More
      </Button>
    </View>
  )
}

export default SeeMore
