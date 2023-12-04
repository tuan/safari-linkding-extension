import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type LinkdingConfig = {
  host: string;
};

const defaultConfig: LinkdingConfig = { host: 'http://localhost:9090' };

type LinkdingConfigStorage = BaseStorage<LinkdingConfig> & {};

const storage = createStorage<LinkdingConfig>('linkding-config-storage-key', defaultConfig, {
  storageType: StorageType.Local,
});

const linkdingConfigStorage: LinkdingConfigStorage = {
  ...storage,
};

export default linkdingConfigStorage;
