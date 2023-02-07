import {
  Dialog as SimpleDialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

import { useCallback, useMemo, useState } from 'react'
import { colorConfigs } from 'src/config/color'
import { Cocktail } from 'src/domain/cocktails/cocktail'
import { CocktaiType, HowToMakeType } from 'src/domain/cocktails/types/cocktail'

export const useCocktailDescriptionChipDialog = () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<HowToMakeType | CocktaiType>('ショート')

  const closeDialog = useCallback(() => {
    setIsOpenDialog(false)
  }, [])

  const openDialog = useCallback((value: HowToMakeType | CocktaiType) => {
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
          <DialogTitle textAlign='center'>{selectedValue}とは？</DialogTitle>
          <DialogContent>
            <DialogContentText
              id='alert-dialog-description'
              color={colorConfigs.text.primary}
              lineHeight={2}
            >
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
