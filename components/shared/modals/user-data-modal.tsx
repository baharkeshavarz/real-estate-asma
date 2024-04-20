import UserDataForm from '@/components/common/user-data-form'
import { useModalStore } from '@/store/modalStore'
import React from 'react'
import Modal from './modal'

const UserDataModal = () => {
  const { isOpen, openModal, closeModal } = useModalStore()
  return (
    <>
        {isOpen && (
        <Modal open={isOpen} setModalOpen={openModal} setModalClose={closeModal}>
           <UserDataForm />
        </Modal>
      )}
    </>
  )
}

export default UserDataModal
