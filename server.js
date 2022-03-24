ESX = null;

emit('esx:getSharedObject', (obj) => ESX = obj)

RegisterCommand("spawn", async (source, args) => {
    let id = args[0]
    let xPlayer = ESX.GetPlayerFromId(source)
    if (xPlayer.group != 'user') {
        emitNet("imago:spawnik", id)
        xPlayer.showNotification('Teleportowales Gracza O Id '+id+' Na Spawna')
        return
    }
    xPlayer.showNotification('Nie Masz Permisji')
})