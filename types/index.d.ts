export interface ChildrenProps {
  children: React.ReactNode
}

export interface NaviagationProps {
  navigation: any
}

export interface TranslateProps {
  t: any
}

export interface LocalProps {
  params: { lang: Locale }
}

export interface PurchaseProps {
  params: {
    lang: Locale
    id: number
  }
}

export interface ChildrenLocalProps {
  children: React.ReactNode
  params: { lang: Locale }
}

export interface ApiResponse {
  status: number
  data: any
}

export interface SettingsT {
  autoPlay: boolean
  animation: "fade" | "slide"
  indicators: boolean
  duration: number
  navButtonsAlwaysVisible: boolean
  navButtonsAlwaysInvisible: boolean
  fullHeightHover: boolean
  cycleNavigation: boolean
  swipe: boolean
  [key: string]: any
}

export interface SettingsProps {
  settings: SettingsT
  setSettings: Function
}

export interface WorkFlow {
  icon: string
  name: string
  step: number
  url: string
  description: string
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  fatherName: string
  birthDate: string
  gender: number
  userAddressId: number
}

export interface ProfileData {
  birthDate: string
  fatherName: string
  firstName: string
  gender: number
  lastName: string
  score: number
  userAddressId: number
}

export interface TypeGroupItem {
  id: number
  name: string
}

