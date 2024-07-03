import IconClose from '../../../assets/icons/close.svg'
import * as S from './style'

interface IModalProps {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
}

export const Modal = ({ onClose, isOpen, children }: IModalProps) => {
  return (
    <S.Wrapper>
      {isOpen && (
        <S.ContainerModal>
          <S.Modal>
            <S.HeaderModal onClick={() => onClose()}>
              <img src={IconClose} alt="close button" />
            </S.HeaderModal>

            <S.ModalBody>
              {children}
            </S.ModalBody>
          </S.Modal>
        </S.ContainerModal>
      )
      }
    </S.Wrapper>
  )
}

