import { AccountService } from "../_services";

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        // TODO: When we get to tokenization management with ITS 4.1 APi integration
        // accountService.refreshToken().subscribe().add(resolve); 
    });
}