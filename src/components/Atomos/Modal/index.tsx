import IconClose from '../../../assets/icons/close.svg'
import * as S from './style'

interface IModalProps {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
}

export const Modal = ({ onClose, isOpen, children }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <S.Wrapper>
      <S.ContainerModal>
        <S.Modal>
          <button className='btn-close' type='button' onClick={onClose}>
            <img src={IconClose} alt="close button" />
          </button>
          <S.ModalBody>
            {children}
          </S.ModalBody>
        </S.Modal>
      </S.ContainerModal>
    </S.Wrapper>
  )
}

