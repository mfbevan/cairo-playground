// Declare this file as a StarkNet contract.
%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.starknet.common.syscalls import get_caller_address
from starkware.cairo.common.bool import (FALSE, TRUE)

// The contract owner -- set on deployment
@storage_var
func owner() -> (owner_address: felt) {
}

// Define a storage variable.
@storage_var
func balance() -> (res: felt) {
}

@constructor
func constructor{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    owner_address: felt
) {
    owner.write(owner_address);
    return();
}

// Return owner address
@view
func get_owner{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (address: felt) {
    let (address) = owner.read();
    return (address=address); 
}

// Increases the balance by the given amount.
@external
func increase_balance{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}(amount: felt) {
    check_owner();
    let (res) = balance.read();
    balance.write(res + amount);
    return ();
}

// Decreases the balance by the given amount.
@external
func decrease_balance{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}(amount: felt) {
    check_owner();
    let (res) = balance.read();
    balance.write(res - amount);
    return ();
}

// Returns the current balance.
@view
func get_balance{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}() -> (res: felt) {
    let (res) = balance.read();
    return (res=res);
}

// Check if the calling account is the owner and revert if not
@view
func check_owner{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(){
    let (caller_address) = get_caller_address();
    let (owner_address) = owner.read();
    with_attr error_message("caller account is not contract owner"){
        assert caller_address = owner_address;
    }
    return ();
}
