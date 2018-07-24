import { IConfigurator } from './../interfaces/IConfigurator';
import { IChatConnectorSettings } from 'botbuilder';

export class InvalidAppCredentialsError extends Error {}

export class EnvConfigurator implements IConfigurator {
    
    public get AppCredentials(): IChatConnectorSettings {
        if(!process.env.MicroSoftAppId) throw new InvalidAppCredentialsError('AppId not defined');
        if(!process.env.MicroSoftAppPassword) throw new InvalidAppCredentialsError('AppPassword not defined');

        return {
            appId: process.env.MicroSoftAppId,
            appPassword: process.env.MicroSoftAppPassword
        }
    }
}