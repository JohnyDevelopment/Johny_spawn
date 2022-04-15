ESX = null;

emit('esx:getSharedObject', (obj) => ESX = obj)

RegisterCommand("spawn", (source, args) => {
    let id = args[0]
    let name = GetPlayerName(source)
    let xPlayer = ESX.GetPlayerFromId(source)
    let xPlayerek = ESX.GetPlayerFromId(id)
    if (xPlayer.group != 'user') {
        emit('imagospawn:kk', id, name)
        xPlayer.showNotification('Teleportowales Gracza O Id '+id+' Na Spawna!')
        return
    }
    xPlayer.showNotification('Nie Masz Permisji')
})

on('imagospawn:kk'), (id, name) => {
    xPlayerek.showNotification(`~r~Zostałeś Przeteleportowany Na Spawn Przez ${name} `)
    const ped = GetPlayerPed(id);
    SetEntityCoords(ped, -518.3106, -236.856, 35.85, false, false, false, true);
}
