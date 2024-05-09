searchState.loadedDescShard("alloy_eips", 0, "alloy-eips\nEIP-1559 constants, helpers, and types.\nEIP-2718 traits.\nEIP-2930 types.\nEIP-4788 constants.\nEIP-4844 constants and helpers.\nEIP-4895 Withdrawal type and serde helpers.\nContains Deposit types, first introduced in the Prague …\nContains WithdrawalRequest types, first introduced in the …\nEIP-7685: General purpose execution layer requests\nConstants related to the beacon chain consensus.\nBaseFeeParams contains the config parameters that control …\nBase fee max change denominator as defined in EIP-1559\nElasticity multiplier as defined in EIP-1559\nThe default Ethereum block gas limit.\nInitial base fee as defined in EIP-1559\nThe minimum tx fee below which the txpool will reject the …\nSame as MIN_PROTOCOL_BASE_FEE but as a U256.\nCalculate the base fee for the next block based on the …\nThe elasticity multiplier from EIP-1559\nThe base_fee_max_change_denominator from EIP-1559\nBaseFeeParams contains the config parameters that control …\nThe elasticity multiplier from EIP-1559\nGet the base fee parameters for Ethereum mainnet\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe base_fee_max_change_denominator from EIP-1559\nCreate a new BaseFeeParams\nCalculate the base fee for the next block based on the …\nBase fee max change denominator as defined in EIP-1559\nElasticity multiplier as defined in EIP-1559\nThe default Ethereum block gas limit.\nInitial base fee as defined in EIP-1559\nThe minimum tx fee below which the txpool will reject the …\nSame as MIN_PROTOCOL_BASE_FEE but as a U256.\nCalculate the base fee for the next block based on the …\nEither a block hash <em>or</em> a block number\nA Block Identifier. …\nBlock number and hash.\nA block Number (or tag - “latest”, “earliest”, “…\nEarliest block (genesis)\nFinalized block accepted as canonical\nBlock number and hash of the forked block.\nFailed to parse a block id as a hex string.\nA block hash and an optional bool that defines if it’s …\nA block hash\nThrown when a 0x-prefixed hex string was expected\nLatest block\nBlock numbers should be 0x-prefixed\nBlock by number from canon chain\nA block number\nA block number\nError thrown when parsing a BlockHashOrNumber from a …\nError thrown when parsing a BlockId from a string.\nError thrown when parsing a BlockNumberOrTag from a string.\nFailed to parse hex value\nFailed to parse hex value\nFailed to parse a block id from a number.\nPending block (not yet part of the blockchain)\nA block hash which may have a boolean requireCanonical …\nSafe head block\nReturns the block hash if it is BlockId::Hash\nReturns the numeric block number if explicitly set\nReturns the block number if it is a …\nA block hash\nCreates a new “earliest” tag instance.\nCreates a new “finalized” tag instance.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns an RpcBlockHash from a B256.\nCreate a new block hash instance.\nBlock hash\nBlock hash\nCreate a new block hash instance that requires the block …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes <code>Self</code> and returns <code>BlockNumber</code>, <code>BlockHash</code>\nReturns <code>true</code> if it’s “earliest”\nReturns true if this is BlockNumberOrTag::Earliest\nReturns <code>true</code> if it’s “finalized”\nReturns true if this is BlockNumberOrTag::Finalized\nReturns true if this is BlockId::Hash\nReturns <code>true</code> if it’s “latest”\nReturns true if this is BlockNumberOrTag::Latest\nReturns <code>true</code> if a numeric block number is set\nReturns true if this is BlockNumberOrTag::Number\nReturns <code>true</code> if it’s “pending”\nReturns true if this is BlockNumberOrTag::Pending\nReturns <code>true</code> if it’s “safe”\nReturns true if this is BlockNumberOrTag::Safe\nCreates a new “latest” tag instance.\nReturns whether or not the block matches the given …\nCreates a new <code>BlockNumHash</code> from a block number and hash.\nCreates a new block number instance.\nBlock number\nBlock number\nCreates a new “pending” tag instance.\nWhether the block must be a canonical block\nCreates a new “safe” tag instance.\nDecoding trait for EIP-2718 envelopes. These envelopes …\nAn EIP-2718 envelope, blanket implemented for types that …\nEIP-2718 decoding errors.\nEncoding trait for EIP-2718 envelopes. These envelopes …\nRlp error from <code>alloy_rlp</code>.\nGot an unexpected type flag while decoding.\nDecode an EIP-2718 transaction into a concrete instance\nEncode the transaction according to EIP-2718 rules. First …\nThe length of the 2718 encoded envelope. This is the …\nEncode the transaction according to [EIP-2718] rules. …\nExtract the type byte from the buffer, if any. The type …\nDecode the default variant.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nTrue if the envelope is the legacy variant.\nDecode an EIP-2718 transaction in the network format.\nReturn the network encoding. For non-legacy items, this is …\nSeal the encodable, by encoding and hashing it.\nCompute the hash as committed to in the MPT trie.\nReturn the type flag (if any).\nDecode the appropriate variant, based on the type flag.\nAccessList as defined in EIP-2930\nA list of addresses and storage keys that the transaction …\nAccess list with gas used appended.\nList with accounts accessed during transaction.\nAdds an address to the access list and returns <code>true</code> if the …\nAccount addresses that would be loaded at the start of …\nChecks if the access list contains the specified address.\nChecks if a specific storage slot within an account is …\nChecks if the storage keys at the given index within an …\nReturns an iterator over the list’s addresses and …\nConverts the list into a vec, expected by revm\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nEstimated gas used with access list.\nReturns the position of the given address in the access …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes the type and returns an iterator over the list’…\nConsumes the type and converts the list into a vec, …\nCalculates a heuristic for the in-memory size of the …\nCalculates a heuristic for the in-memory size of the …\nKeys of storage that would be loaded at the start of …\nThe caller to be used when calling the EIP-4788 beacon …\nDetermines the maximum rate of change for blob fee\nMinimum gas price for a data blob\nThe modulus of the BLS group used in the KZG commitment …\nThe modulus of the BLS group used in the KZG commitment …\nHow many bytes are in a blob Same as DATA_GAS_PER_BLOB, …\nHow many bytes are in a commitment\nHow many bytes are in a proof\nA Blob serialized as 0x-prefixed hex string\nThis represents a set of blobs, and its corresponding …\nAn error that can occur when validating a …\nA commitment/proof serialized as 0x-prefixed hex string\nGas consumption of a single data blob.\nHow many field elements are stored in a single data blob.\nSize a single field element in bytes.\nProof validation failed.\nAn error returned by <code>c_kzg</code>.\nMaximum number of data blobs in a single block.\nMaximum data gas for data blobs in a single block.\nError variant for thrown by EIP-4844 tx variants without a …\nThe inner transaction is not a blob transaction.\nTarget number of data blobs in a single block.\nTarget data gas for data blobs in a single block.\nNumber of usable bits in a field element. The top two bits …\nThe number of usable bytes in a single data blob. This is …\nCommitment version of a KZG commitment\nThe versioned hash is incorrect.\nThe blob data.\nCalculates the blob gas price from the header’s excess …\nCalculates the <code>excess_blob_gas</code> from the parent header’s …\nThe blob commitments.\nModule houses the KZG settings, enabling Custom and Default\nApproximates <code>factor * e ** (numerator / denominator)</code> using …\nCalculates the versioned hash for a KzgCommitment of 48 …\nThe blob proofs.\nContains sidecar related types EIP-4844 sidecar type\nThis module contains functions and types used for parsing …\nThe versioned hash we expected\nThe versioned hash we got\nCustom trusted setup.\nDefault mainnet trusted setup.\nKZG settings.\nReturns the argument unchanged.\nReturns the KZG settings.\nCalls <code>U::from(self)</code>.\nThis represents a set of blobs, and its corresponding …\nAn error that can occur when validating a …\nProof validation failed.\nAn error returned by <code>c_kzg</code>.\nError variant for thrown by EIP-4844 tx variants without a …\nThe inner transaction is not a blob transaction.\nThe versioned hash is incorrect.\nThe blob data.\nThe blob commitments.\nDecodes the inner BlobTransactionSidecar fields from RLP …\nEncodes the inner BlobTransactionSidecar fields as RLP …\nEncodes the inner BlobTransactionSidecar fields as RLP …\nOutputs the RLP length of the BlobTransactionSidecar …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new instance from the given KZG types.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstructs a new BlobTransactionSidecar from a set of …\nThe blob proofs.\nCalculates a size heuristic for the in-memory size of the …\nVerifies that the versioned hashes are valid for this …\nReturns the versioned hash for the blob at the given …\nReturns an iterator over the versioned hashes of the …\nThe versioned hash we expected\nThe versioned hash we got\nFailed to get current directory.\nFile is not properly formatted.\nA newtype over list of G1 point from kzg trusted setup.\nDefault G1 points.\nA newtype over list of G2 point from kzg trusted setup.\nDefault G2 points.\nProblems related to I/O.\nKZG custom Error types\nNumber of points does not match what is expected.\nNumber of G1 Points.\nNumber of G2 Points.\nNot a valid file.\nNot able to parse to usize.\nThe specified path does not exist.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nParses the contents of a KZG trusted setup file into a …\nMultiplier for converting gwei to wei.\nWithdrawal represents a validator withdrawal from the …\nTarget address for withdrawn ether.\nValue of the withdrawal in gwei.\nReturn the withdrawal amount in wei.\nReturns the argument unchanged.\nMonotonically increasing identifier issued by consensus …\nCalls <code>U::from(self)</code>.\nIndex of validator associated with withdrawal.\nThis structure maps onto the deposit object from EIP-6110.\nMainnet deposit contract address.\nAmount of ether deposited in gwei\nReturns the argument unchanged.\nDeposit index\nCalls <code>U::from(self)</code>.\nValidator public key\nDeposit signature\nWithdrawal credentials\nRepresents an execution layer triggerable withdrawal …\nAmount of withdrawn ether in gwei.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAddress of the source of the exit.\nValidator public key.\nDecoding trait for EIP-7685 requests. The trait should be …\nEIP-7685 decoding errors.\nAn EIP-7685 request envelope, blanket implemented for …\nEncoding trait for EIP-7685 requests. The trait should be …\nThere was no request type in the buffer.\nRlp error from <code>alloy_rlp</code>.\nGot an unexpected request type while decoding.\nDecode an EIP-7685 request into a concrete instance\nEncode the request according to EIP-7685 rules.\nEncode the request payload.\nEncode the request according to EIP-7685 rules.\nExtract the type byte from the buffer, if any. The type …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturn the request type.\nDecode the appropriate variant, based on the request type.\nMax seconds from current time allowed for blocks, before …\nThe number of blocks to unwind during a reorg that already …\nThe default block nonce in the beacon consensus\nAn EPOCH is a series of 32 slots (~6.4min).\nAn EPOCH is a series of 32 slots (~6.4min).\nAn EPOCH is a series of 32 slots.\nThe duration of a slot in seconds.\nThe duration of a slot in seconds.")