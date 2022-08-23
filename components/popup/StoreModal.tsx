import { SaveFilled } from '@ant-design/icons';
import { Modal, Button, Text } from '@nextui-org/react';
import { useUser } from '@supabase/auth-helpers-react';
import { notification, Rate } from 'antd';
import { IStore } from 'interfaces';
import Image from 'next/image';

declare type StoreModalPropsType = {
  bindings: {
    open: boolean;
    onClose: () => void;
  };
  setVisible: (visible: boolean) => void;
  store: IStore;
};

const StoreModal = (props: StoreModalPropsType) => {
  const { bindings, setVisible, store } = props;
  const { user } = useUser();
  const onRate = (value) => {
    console.log(value);
    if (!user) {
      notification.error({
        message: 'Error',
        description: 'Please login to rate',
      });
      return;
    }
    notification.success({
      message: 'Success',
      description: 'Thank you for your feedback',
    });
  };
  return (
    <div>
      <Modal scroll width="600px" aria-labelledby="modal-title" aria-describedby="modal-description" {...bindings}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {store.name}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image src={store.logo} width={200} height={200} objectFit="contain" />
          <Rate defaultValue={store.rating || 2} onChange={onRate} />
          <Text id="modal-description">{store.description}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={() => setVisible(false)}>
            Close
          </Button>
          <Button auto flat color="default" onPress={() => setVisible(false)}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StoreModal;
