import {
  Dialog as SimpleDialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import { useCallback, useMemo, useState } from 'react'
import { Cocktail } from 'src/domain/cocktails/cocktail'
import { CocktailType, HowToMakeType } from 'src/domain/cocktails/types/cocktail'

export const useCocktailDescriptionChipDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<HowToMakeType | CocktailType>('ショート')

  const closeDialog = useCallback(() => {
    setIsOpenDialog(false)
  }, [])

  const openDialog = useCallback((value: HowToMakeType | CocktailType) => {
    setIsOpenDialog(true)
    setSelectedValue(value)
  }, [])

  const cocktailChipDescription = useMemo(
    () => Cocktail.getCocktailShortDescription(selectedValue),
    [selectedValue],
  )

  const Dialog = useMemo(() => {
    const DialogComponent = () => {
      return (
        <SimpleDialog onClose={closeDialog} open={isOpenDialog}>
          <DialogTitle
            textAlign='center'
            sx={{ backgroundColor: 'background.paper', color: 'primary.main' }}
          >
            {selectedValue}とは？
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: 'background.paper' }}>
            <DialogContentText id='alert-dialog-description' color={'primary.main'} lineHeight={2}>
              {cocktailChipDescription}
            </DialogContentText>
          </DialogContent>
        </SimpleDialog>
      )
    }
    return DialogComponent
  }, [closeDialog, isOpenDialog, selectedValue, cocktailChipDescription])

  return { openDialog, Dialog }
}
