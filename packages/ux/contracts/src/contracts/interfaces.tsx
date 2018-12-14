export interface ILibraryItem {
	Description: string
	Name: string
	Version: string
	Dependencies: IDependency[]
	Consumers: IConsumer[]
}

export interface ILibraryUpdateStatus {
	UpdateName: string
	UpdateVersion: string
	ComponentName: string
	ComponentVersion: string
}

export interface ILibraryLogItem {
	LogId: string
	TimeStamp: Date
	ComponentName: string
	ComponentVersion: string
	ComponentUpdateRange: string
	UpdateName: string
	UpdateVersion: string
	LogStatus: number
	ResultMessage: string
	IsErrorVisible: boolean
	TfsLocation: string
}

export interface ILibraryItemGroup {
	Key: string
	Value: ILibraryItem[]
}

export interface ILibraryItemList {
	LastCacheTime: string
	Components: ILibraryItemGroup[]
}

export interface IDependency {
	PackageName: string
	DependencyVersion: string
	LockedVersion: string
	LatestVersion: string
}

export interface IConsumer {
	ConsumerName: string
	ConsumerVersion: string
	PackageVersion: string
}
