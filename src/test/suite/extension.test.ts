import { base64Decode, base64Encode } from '../../commands/base64';
import { md5 } from '../../commands/md5';
import { sha256 } from '../../commands/sha256';
// import * as myExtension from '../../extension';

describe("md5", () => {
	it("creates correct md5 string", () => {
		const strings = ["hello", "1234567890", "﷐﷑﷒﷓﷔﷕﷖﷗﷘﷙﷚﷛﷜﷝﷞﷟﷠﷡﷢﷣﷤﷥﷦﷧﷨﷩﷪﷫﷬﷭﷮﷯", "������"];
		const encoded = ["5d41402abc4b2a76b9719d911017c592", "e807f1fcf82d132f9bb018ca6738a19f",
			"d1ea16dac1882ae264a8b9d472297fcb", "eae0b3b43fc5b404fa454a4a36ab0d1b"];

		const result = [];
		for (const word of strings) {
			result.push(md5(word));
		}

		expect(result).toEqual(encoded);
	});

	it("ignores empty string", () => {
		const strings = ["", "", "", ""];
		const encoded = ["", "", "", ""];

		const result = [];
		for (const word of strings) {
			result.push(md5(word));
		}

		expect(result).toEqual(encoded);
	});
});


describe("sha256", () => {
	it("creates correct sha256 string", () => {
		const strings = ["hello", "1234567890", "﷐﷑﷒﷓﷔﷕﷖﷗﷘﷙﷚﷛﷜﷝﷞﷟﷠﷡﷢﷣﷤﷥﷦﷧﷨﷩﷪﷫﷬﷭﷮﷯", "������"];
		const encoded = ["2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
			"c775e7b757ede630cd0aa1113bd102661ab38829ca52a6422ab782862f268646",
			"9261fbb6ee51869402b265fbfeae71989db2bb001cc82eb84cb7671752c7786b",
			"466ce82f1af35cb6bb81e119ed7cc54d8e9c431c125e81d6031ae5ab1882f91a"];

		const result = [];
		for (const word of strings) {
			result.push(sha256(word));
		}

		expect(result).toEqual(encoded);
	});

	it("ignores empty string", () => {
		const strings = ["", "", "", ""];
		const encoded = ["", "", "", ""];

		const result = [];
		for (const word of strings) {
			result.push(sha256(word));
		}

		expect(result).toEqual(encoded);
	});
});


describe("base64", () => {
	it("encode", () => {
		const strings = ["hello", "1234567890", "﷐﷑﷒﷓﷔﷕﷖﷗﷘﷙﷚﷛﷜﷝﷞﷟﷠﷡﷢﷣﷤﷥﷦﷧﷨﷩﷪﷫﷬﷭﷮﷯", "������"];
		const encoded = ["aGVsbG8=", "MTIzNDU2Nzg5MA==",
			"77eQ77eR77eS77eT77eU77eV77eW77eX77eY77eZ77ea77eb77ec77ed77ee77ef77eg77eh77ei77ej77ek77el77em77en77eo77ep77eq77er77es77et77eu77ev",
			"77+977+977+977+977+977+9"];

		const result = [];
		for (const word of strings) {
			result.push(base64Encode(word));
		}

		expect(result).toEqual(encoded);
	});

	it("decode", () => {
		const strings = ["aGVsbG8=", "MTIzNDU2Nzg5MA==",
			"77eQ77eR77eS77eT77eU77eV77eW77eX77eY77eZ77ea77eb77ec77ed77ee77ef77eg77eh77ei77ej77ek77el77em77en77eo77ep77eq77er77es77et77eu77ev",
			"77+977+977+977+977+977+9"];
		const decoded = ["hello", "1234567890", "﷐﷑﷒﷓﷔﷕﷖﷗﷘﷙﷚﷛﷜﷝﷞﷟﷠﷡﷢﷣﷤﷥﷦﷧﷨﷩﷪﷫﷬﷭﷮﷯", "������"];

		const result = [];
		for (const word of strings) {
			result.push(base64Decode(word));
		}

		expect(result).toEqual(decoded);
	});
});